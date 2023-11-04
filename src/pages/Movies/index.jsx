import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Img, Text } from "components";
import Banners from "components/Banners";

function Movies(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://mobile.codegifted.com/api/movie";

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

  const createRows = () => {
    const rows = [];
    const itemsPerRow = 6;
    
    for (let i = 0; i < data.length; i += itemsPerRow) {
      const row = data.slice(i, i + itemsPerRow);
      rows.push(row);
    }

    return rows;
  };

  return (
    <>
    <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
       <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="md:flex-1 h-20 sm:h-auto object-cover w-[6%] md:w-full"
            src="images/img_whatsappimage.png"
            alt="whatsappimage"
          />
          
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[528px] md:mt-0 my-[19px] w-[56%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[63%] md:w-full">
              <div className={`flex flex-row gap-2 items-center justify-center w-auto ${location.pathname === "/movies" ? 'text-pink-500' : ''}`}>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[76px]"
                onClick={() => navigate("/HomePage")}
                leftIcon={
                  <Img
                    className="h-[22px] mb-px mr-2"
                    src="images/img_frame.svg"
                    alt="Frame"
                  />
                }
              >
                <div className="text-base text-left text-white-A700">Home</div>
              </Button>
              </div>
              <Button
                className={`common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[83px] ${location.pathname === "/movies" ? 'text-pink-500' : ''}`}
                onClick={() => navigate("/movies")}
                leftIcon={
                  <Img
                    className="h-[22px] mb-px mr-2"
                    src="images/img_svgexport6_white_a700.svg"
                    alt="svgexport-6"
                  />
                }
              >
                <div className="text-base text-left text-white-A700">
                  Movies
                </div>
              </Button>
              <Button
                className={`common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[100px] ${location.pathname === "/channels" ? 'text-pink-500' : ''}`}
                onClick={() => navigate("/channels")}
                leftIcon={
                  <Img
                    className="h-[22px] mt-px mr-2"
                    src="images/img_television.svg"
                    alt="television"
                  />
                }
              >
                <div className="text-base text-left text-white-A700">
                  Channels
                </div>
              </Button>
              <div className={`flex flex-row gap-2 items-center justify-center w-auto ${location.pathname === "/mychannels" ? 'text-pink-500' : ''}`}>
                <Img
                  className="h-6 w-6"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Text
                  className="common-pointer text-base text-white-A700 w-auto"
                  size="txtOpenSansRomanRegular16"
                  onClick={() => navigate("/mychannels")}
                >
                  My Channel
                </Text>
              </div>
            </div>
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_search_white_a700.svg"
              alt="search_One"
            />
            <Button
              className={`common-pointer cursor-pointer flex items-center justify-center min-w-[190px] ${location.pathname === "/desktop192" ? 'text-pink-500' : ''}`}
              onClick={() => navigate("/desktop192")}
              leftIcon={
                <Img
                  className="h-[22px] mb-px mr-2.5"
                  src="images/img_bipersonfill.svg"
                  alt="bi:person-fill"
                />
              }
              shape="round"
              color="pink_500"
              size="sm"
              variant="fill"
            >
              <div className="font-bold text-base text-center">
                Sign Up / Login
              </div>
            </Button>
          </div>
        </header>

        <Banners/>
   
    <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full">
   
      <Text className="text-white-A700 text-xl w-auto" size="txtOpenSansRomanBold20WhiteA700">
        All Movies
      </Text>
      <div className="flex flex-col items-center justify-start w-full">
        {loading ? (
          <p>Loading...</p>
        ) : (
          createRows().map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-row gap-5 items-center justify-between w-full">
              {row.map((movie) => {
                // Store movie_id in a variable
                const movieId = movie.movie_id;

                return (
                  <div key={movie.movie_id}>
                    <Link to={`/details/${movie.movie_id}`}>
                      <img
                        src={`https://ourbrandtv.com/assets/global/movie_thumb/${movie.movie_id}.jpg`}
                        alt={movie.title}
                        className="common-pointer h-[300px] md:h-auto object-cover w-full"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>
    </div>
    </div>
    </>
    
  );
}

export default Movies;
