import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Text } from "components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function TopTen() {
  const [genreData, setGenreData] = useState([]);
  const [loadingGenres, setLoadingGenres] = useState(true);

  useEffect(() => {
    const genreApiUrl = "https://ourbrandtv.com/mobile/public/api/genre";

    axios
      .get(genreApiUrl)
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setGenreData(response.data.data);
        } else {
          console.error("Unexpected API response structure for genres");
        }

        setLoadingGenres(false);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
        setLoadingGenres(false);
      });
  }, []);

  return (
    <div>
      {loadingGenres ? (
        <p>Loading genres...</p>
      ) : (
        genreData.map((genre) => (
          <GenreCarousel key={genre.genre_id} genreId={genre.genre_id} genreName={genre.name} />
        ))
      )}
    </div>
  );
}

function GenreCarousel({ genreId, genreName }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const apiUrl = `https://ourbrandtv.com/mobile/public/api/moviebygenre/${genreId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          console.error("Unexpected API response structure for movies by genre");
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching data for genre ${genreName}:`, error);
        setLoading(false);
      });
  }, [genreId, genreName]);

  const renderSlides = () => {
    const itemsPerPage = 6; // Show 6 items at a time
    const totalSlides = Math.ceil(data.length / itemsPerPage);

    return Array.from({ length: totalSlides }).map((_, index) => {
      const startIndex = index * itemsPerPage;
      const endIndex = (index + 1) * itemsPerPage;
      const slideItems = data.slice(startIndex, endIndex).map((movie) => {
        const imageUrl = movie.poster_image
          ? movie.poster_image
          : `https://ourbrandtv.com/admin/assets/global/movie_thumb/${movie.movie_id}.jpg`;

        return (
          <div key={movie.movie_id}>
            <Link to={`/details/${movie.movie_id}`}>
              <img
                src={imageUrl}
                alt={movie.title}
                className="common-pointer h-[250px] md:h-auto w-full"
                style={{ width: "180px" }}
              />
            </Link>
          </div>
        );
      });

      return (
        <div key={index} className="flex justify-start gap-3 sm:gap-4">
          {slideItems}
        </div>
      );
    });
  };

  return (
    <div className="max-w-full mt-2 mb-2">
      <Text
        className="text-white-A700 text-xl w-auto m-3 mb-6"
        size="txtOpenSansRomanBold20WhiteA700"
      >
        {genreName}
      </Text>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Carousel
          showThumbs={false}
          showArrows={true}
          showStatus={false}
          infiniteLoop={true}
          centerMode={false}
          centerSlidePercentage={25}
          dynamicHeight={true}
          itemsToShow={3}
        >
          {renderSlides()}
        </Carousel>
      )}
    </div>
  );
}

export default TopTen;
