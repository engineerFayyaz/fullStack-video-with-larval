import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams , Link} from "react-router-dom";
import { Text, Img, RatingBar } from "components";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";

const DetailsPage = () => {
  const { movie_id, series_id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [seriesData, setSeriesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (movie_id) {
      // This is a movie ID, so fetch movie data
      axios
        .get(`http://mobile.codegifted.com/api/movie/${movie_id}`)
        .then((response) => {
          // Handle movie data response
          if (response.data.status === "1" && response.data.data) {
            setMovieData(response.data.data);
          } else {
            console.error("Unexpected API response structure for movie");
          }
        })
        .catch((error) => {
          // Handle movie data error
          console.error("Error fetching movie data:", error);
        });
    } else  if (series_id) {
      console.log("series_id:", series_id); // Log the series_id
      // Fetch series data based on series_id
      axios
        .get(`http://mobile.codegifted.com/api/series/${series_id}`)
        .then((response) => {
          // Log the API response
  
          // Handle series data response
          if (Array.isArray(response.data.data)) {
            setSeriesData(response.data.data);
          } else {
            console.error("Unexpected series API response structure");
          }
        })
        .catch((error) => {
          // Handle series data error
          console.error("Error fetching series data:", error);
        });
    }
  }, [movie_id, series_id]);
  

  // Your component JSX and rendering logic...

  return (
    <>
    <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
      <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
      <div className="h-[924px] md:h-[939px] max-w-[1421px] mt-[15px] mx-auto md:px-5 relative w-full">
        {movieData && (
          <Img
            className="h-[924px] m-auto object-cover w-full"
            src={`https://ourbrandtv.com/assets/global/movie_thumb/${movieData.movie_id}.jpg`}
            alt="lucifersOne"
          />
        )}
        <div className="absolute bottom-[1%] flex flex-col md:gap-10 gap-20 justify-start left-[4%] w-[66%]">
          {movieData && (
            <Img
              className="common-pointer h-64 md:ml-[0] ml-[523px] w-64"
              src="/images/icons8-pot-player.svg"
              alt="group163539"
              onClick={() => navigate(`/player?videoUrl=${movieData.url}`)}
            />
          )}
          {movieData && (
            <div className="flex flex-col gap-[11px] items-start justify-start w-full">
              <div className="h-[207px] relative w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col gap-[30px] justify-start w-full">
                    <Text
                      className="md:text-5xl text-[100px] text-gray-100 text-right"
                      size="txtOpenSansRomanExtraBold100"
                    >
                      {movieData.title}
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-[5%] flex flex-col font-poppins items-center justify-start left-[0] w-[41%]">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex flex-row gap-[34px] items-start justify-start ml-1.5 md:ml-[0] w-[99%] md:w-full">
                      <Text
                        className="mt-0.5 text-gray-100 text-right text-xl"
                        size="txtOpenSansRomanBold20"
                      >
                        Duration: {movieData.duration}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-[66%] md:w-full">
                      <div className="flex flex-row items-center justify-evenly w-[78%]">
                        <RatingBar
                          className="flex justify-between w-[190px]"
                          value={movieData.rating}
                          starCount={5}
                          activeColor="#f1c644"
                          size={30}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        {movieData.rating}/5
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start w-[66%] md:w-full">
                    {movieData.url && (
                      <Link to={`/player?videoUrl=${movieData.url}`}>
                        <button className="bg-blue-500 text-white text-xl py-2 px-4 rounded">
                          Watch Movie
                        </button>
                      </Link>
                    )}
                    {movieData.trailer_url && (
                      <Link to={`/player?videoUrl=${movieData.trailer_url}`}>
                        <button className="bg-green-500 text-white text-xl py-2 px-4 rounded">
                          Watch Trailer
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start max-w-[1329px] mb-10 mt-8 mx-auto md:px-5 w-full">
        {movieData && (
          <>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
              size="txtOpenSansRomanBold32"
            >
              Description
            </Text>
            <Text
              className="mt-5 text-gray-100 text-sm w-full"
              size="txtNunitoSansRegular14"
            >
              {movieData.description_long}
            </Text>
            <div className="flex flex-col font-poppins gap-2.5 items-start justify-start mt-[22px]">
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Seasons:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  {movieData.year}
                </span>
              </Text>
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Genre:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  {movieData.genre_id}
                </span>
              </Text>
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Directed by:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  {movieData.director}
                </span>
              </Text>
              <Text
                className="text-gray-100 text-xl"
                size="txtPoppinsRegular20"
              >
                <span className="text-gray-100 font-opensans text-left font-normal">
                  Original release:{" "}
                </span>
                <span className="text-gray-100 font-opensans text-left font-bold">
                  {movieData.year}
                </span>
              </Text>
            </div>
          </>
        )}
        {console.log("seriesdata",series_id)}

        {seriesData.length > 0 && (
          <>
            {/* Render the series data here */}
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
              size="txtOpenSansRomanBold32"
            >
              Series Data
            </Text>
            <ul>
              {seriesData && (
                <div className="h-[924px] md:h-[939px] max-w-[1421px] mt-[15px] mx-auto md:px-5 relative w-full">
                  {seriesData && (
                    <Img
                      className="h-[924px] m-auto object-cover w-full"
                      src={`https://ourbrandtv.com/assets/global/movie_thumb/${seriesData.series_id}.jpg`}
                      alt="lucifersOne"
                    />
                  )}
                  <div className="absolute bottom-[1%] flex flex-col md:gap-10 gap-20 justify-start left-[4%] w-[66%]">
                    {seriesData && (
                      <Img
                        className="common-pointer h-64 md:ml-[0] ml-[523px] w-64"
                        src="/images/icons8-pot-player.svg"
                        alt="group163539"
                        onClick={() =>
                          navigate(`/player?videoUrl=${seriesData.trailer_url}`)
                        }
                      />
                    )}
                    {seriesData && (
                      <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                        <div className="h-[207px] relative w-full">
                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                            <div className="flex flex-col gap-[30px] justify-start w-full">
                              <Text
                                className="md:text-5xl text-[100px] text-gray-100 text-right"
                                size="txtOpenSansRomanExtraBold100"
                              >
                                {seriesData.title}
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[5%] flex flex-col font-poppins items-center justify-start left-[0] w-[41%]">
                            <div className="flex flex-col justify-start w-full">
                              <div className="flex flex-row gap-[34px] items-start justify-start ml-1.5 md:ml-[0] w-[99%] md:w-full">
                                <Text
                                  className="mt-0.5 text-gray-100 text-right text-xl"
                                  size="txtOpenSansRomanBold20"
                                >
                                  Duration: {seriesData.duration}
                                </Text>
                              </div>
                              <div className="flex flex-row gap-5 items-center justify-start w-[66%] md:w-full">
                                <div className="flex flex-row items-center justify-evenly w-[78%]">
                                  <RatingBar
                                    className="flex justify-between w-[190px]"
                                    value={seriesData.rating}
                                    starCount={5}
                                    activeColor="#f1c644"
                                    size={30}
                                  ></RatingBar>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5 items-center justify-start w-[66%] md:w-full">
                              {seriesData.trailer_url && (
                                <Link
                                  to={`/player?videoUrl=${seriesData.trailer_url}`}
                                >
                                  <button className="bg-blue-500 text-white text-xl py-2 px-4 rounded">
                                    Watch Series
                                  </button>
                                </Link>
                              )}
                              {seriesData.trailer_url && (
                                <Link
                                  to={`/player?videoUrl=${seriesData.trailer_url}`}
                                >
                                  <button className="bg-green-500 text-white text-xl py-2 px-4 rounded">
                                    Watch Trailer
                                  </button>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  </>
  );
};

export default DetailsPage;
