import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Text } from "components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

function Action() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://mobile.codegifted.com/api/moviebygenre/3";

    // Make the API request
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API Response:", response.data); // Log the response data

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

  return (
    <>
      <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full pl-3">
        <Text
          className="text-white-A700 text-xl w-auto"
          size="txtOpenSansRomanBold20WhiteA700"
        >
          Suspense
        </Text>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Carousel
            showThumbs={false}
            showArrows={true}
            infiniteLoop={true}
            centerMode={false} // Start the carousel from the left
            centerSlidePercentage={25} // Display 100% of the content in one slide
          >
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-3 items-center  w-full">
                  {data.map((movie) => {
                    // Store movie_id in a variable
                    const movieId = movie.movie_id;

                    return (
                      <div key={movie.movie_id} >
                        {/* <img
                    src={`https://ourbrandtv.com/assets/global/movie_thumb/${movie.movie_id}.jpg`}
                    alt={movie.title}
                    // onClick={() => navigate(`/details/${movieId}`)} // Use the stored movieId
                    className="common-pointer h-[300px] md:h-auto object-cover w-full"
                  /> */}
                        <Link to={`/details/${movie.movie_id}`}>

                          <img
                            src={`https://ourbrandtv.com/assets/global/movie_thumb/${movie.movie_id}.jpg`}
                            alt={movie.title}
                            className="common-pointer h-[250px] md:h-auto  w-full" style={{width:"180px"}}
                          />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Carousel>
        )}
      </div>
    </>
  );
}

export default Action;
