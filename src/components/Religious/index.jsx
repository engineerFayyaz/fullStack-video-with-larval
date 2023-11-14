import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Text } from "components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function Religious() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://mobile.codegifted.com/api/moviebygenre/9";

    // Make the API request
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response.data);

        if (Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          console.error("Unexpected API response structure");
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const renderSlides = () => {
    const itemsPerPage = 6;
    const totalSlides = Math.ceil(data.length / itemsPerPage);

    return Array.from({ length: totalSlides }).map((_, index) => {
      const startIndex = index * itemsPerPage;
      const endIndex = (index + 1) * itemsPerPage;
      const slideItems = data.slice(startIndex, endIndex).map((movie) => {
        const imageUrl = movie.poster_image
          ? movie.poster_image
          : `https://ourbrandtv.com/assets/global/movie_thumb/${movie.movie_id}.jpg`;
    
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

      // const slideItems = data.slice(startIndex, endIndex).map((movie) => (
      //   const imageUrl = movie.poster_image
      //   <div key={movie.movie_id}>
      //     <Link to={`/details/${movie.movie_id}`}>
      //       {/* <img
      //         src={`https://ourbrandtv.com/assets/global/movie_thumb/${movie.movie_id}.jpg`}
      //         alt={movie.title}
      //         className="common-pointer h-[250px] md:h-auto w-full"
      //         style={{ width: "180px" }}
      //       /> */}
      //       <img
      //       src={imageUrl}
      //       alt={movie.title}
      //       className="common-pointer h-[250px] md:h-auto w-full"
      //       style={{ width: "180px" }}
      //     />
      //     </Link>
      //   </div>
      // ));

      return (
        <div key={index} className="flex justify-around">
          {slideItems}
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full pl-3">
        <Text
          className="text-white-A700 text-xl w-auto"
          size="txtOpenSansRomanBold20WhiteA700"
        >
          Religious
        </Text>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <Carousel
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
            centerMode={false}
            centerSlidePercentage={25}
            dynamicHeight={true}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    style={{ background: "#fff", width: "10px", height: "10px" }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                  />
                );
              }
              return (
                <li
                  style={{ background: "#000", width: "10px", height: "10px" }}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            {renderSlides()}
          </Carousel>
        )}
      </div>
    </>
  );
}

export default Religious;
