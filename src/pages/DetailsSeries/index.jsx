import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Text, Img, RatingBar } from "components";
import { useNavigate } from "react-router-dom";
import Header from "components/Header";

const DetailsSeries = () => {
  const { series_id } = useParams();
  const [seriesData, setSeriesData] = useState({}); // Updated the initial state to an object
  const navigate = useNavigate();

  useEffect(() => {
    console.log("series_id:", series_id);

    // Fetch series data based on series_id
    axios
      .get(`http://mobile.codegifted.com/api/series/${series_id}`)
      .then((response) => {
        console.log("API response:", response.data);
        if (response.data.status === "1" && response.data.data) {
          // Access the data within the response
          const seriesData = response.data.data;

          setSeriesData(seriesData);
        } else {
          console.error("Unexpected series API response structure");
        }
      })
      .catch((error) => {
        console.error("Error fetching series data:", error);
      });
  }, [series_id]);


  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="h-[700px] md:h-[939px] max-w-[1421px] mt-[15px] mx-auto md:px-5 relative w-full">
          {seriesData && seriesData.series_id && ( // Check if seriesData and series_id exist
            <Img
              className="h-[100%] m-auto  w-full"
              src={`https://ourbrandtv.com/assets/global/movie_thumb/${seriesData.series_id}.jpg`}
              alt="lucifersOne"
            />
          )}
          <div className="absolute bottom-[1%] flex flex-col md:gap-10 gap-20 justify-start left-[4%] w-[66%]">
            {seriesData && seriesData.series_id && ( // Check if seriesData and series_id exist
              <Img
                className="common-pointer h-100 md:ml-[0] ml-[523px] w-44"
                src="/images/icons8-pot-player.svg"
                alt="group163539"
                onClick={() => navigate(`/player?videoUrl=${seriesData.trailer_url}`)}
              />
            )}
            {seriesData && seriesData.title && ( // Check if seriesData and title exist
              <div className="flex flex-col h-[250px] w-[100%]  items-start justify-start w-full">
                <div className=" w-full">
                  <div className="flex flex-col  justify-start m-auto w-full">
                    <div className="flex flex-col  justify-start w-full">
                      <Text
                        className="md:text-2xl text-[40px] text-gray-100 "
                        size="txtOpenSansRomanExtraBold100"
                      >
                        {seriesData.title}
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col font-poppins  justify-start left-[0] w-[100%]">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex flex-row  items-start justify-start  md:ml-[0] w-[99%] md:w-full">
                        <Text
                          className="mt-0.5 text-gray-100 text-right text-xl"
                          size="txtOpenSansRomanBold20"
                        >
                          Duration: {seriesData.duration}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-start w-[66%] md:w-full">
                        <div className="flex flex-row items-center justify-evenly w-[28%]">
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
                    <div className="flex flex-row gap-5  justify-start w-[100%] md:w-full">
                      {seriesData.trailer_url && (
                        <Link to={`/player?videoUrl=${seriesData.trailer_url}`}>
                          <button className="bg-blue-500 text-white text-xl py-2 px-4 rounded">
                            Watch Series
                          </button>
                        </Link>
                      )}
                      {seriesData.trailer_url && (
                        <Link to={`/player?videoUrl=${seriesData.trailer_url}`}>
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
      </div>
    </>
  );
};

export default DetailsSeries;
