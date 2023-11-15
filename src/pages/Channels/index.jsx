import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Img, List, Text } from "components";
import ChannelBanner from "components/ChannelBanner";
import Header1 from "components/Header1";

const Channels = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liveData, setLiveData] = useState([]);
  const email = location.state ? location.state.email : null;

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://mobile.codegifted.com/api/series";
    const liveapi = "http://mobile.codegifted.com/api/live";
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

    axios
      .get(liveapi)
      .then((response) => {
        console.log("API Response:", response.data); // Log the response data

        if (Array.isArray(response.data.data)) {
          setLiveData(response.data.data);
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

  const extractVideoIdFromUrl = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/(?:[^\/]+\/)*)|ytimg\.com\/vi\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const createRows = () => {
    const rows = [];
    const itemsPerRow = 6;

    for (let i = 0; i < data.length; i += itemsPerRow) {
      const row = data.slice(i, i + itemsPerRow);
      rows.push(row);
    }

    return rows;
  };

  const requestFullScreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
        <Header1 className=" flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="font-poppins h-[514px] md:h-[526px] mt-3 md:px-5 relative w-full">
          <ChannelBanner />
        </div>
        all series can be get there:
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full pl-3">
          <Text
            className="text-white-A700 text-xl w-auto"
            size="txtOpenSansRomanBold20WhiteA700"
          >
            All series/Channels
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            {loading ? (
              <p>Loading...</p>
            ) : (
              createRows().map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex flex-row gap-3 items-center  w-full"
                >
                  {row.map((movie) => {
                    // Store movie_id in a variable
                    const movieId = movie.series_id;

                    return (
                      <div key={movie.series_id}>
                        <Link
                          to={{
                            pathname: `/detailsseries/${movie.series_id}`,
                            state: { data: data },
                          }}
                        >
                          <img
                            src={`https://ourbrandtv.com/assets/global/movie_thumb/${movie.series_id}.jpg`}
                            alt={movie.title}
                            className="common-pointer h-[250px] md:h-auto  w-full"
                            style={{ width: "180px" }}
                          />
                        </Link>
                        {console.log("data passed : ", movie.series_id)}
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>
        <div className="flex flex-col font-opensans justify-start max-w-[1432px] mb-[29px] mt-8 mx-auto overflow-auto md:px-5 w-full pl-3">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-1 items-center justify-start ml-1 md:ml-[0] w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtOpenSansRomanBold20WhiteA700"
              >
                Mostly Watched
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/9Auq9mYxFEE"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/GHZvOIQgwFY"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/vZYMwAm8sso"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/3_-jZqsQqdk"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/3ni9YJHkKHw"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
            </List>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] pr-5 mt-8 w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Top 10 in your country
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright_One"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <iframe
                    width="100%"
                    height="160rem"
                    src="https://www.youtube.com/embed/jfKfPfyJRdk"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media"
                    title="YouTube Video"
                  ></iframe>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <iframe
                    width="100%"
                    height="160rem"
                    src="https://www.youtube.com/embed/zsYwejVYZ_M"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media"
                    title="YouTube Video"
                  ></iframe>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <iframe
                    width="100%"
                    height="160rem"
                    src="https://www.youtube.com/embed/qH3fETPsqXU"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media"
                    title="YouTube Video"
                  ></iframe>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <iframe
                    width="100%"
                    height="160rem"
                    src="https://www.youtube.com/embed/rUxyKA_-grg"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media"
                    title="YouTube Video"
                  ></iframe>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <iframe
                    width="100%"
                    height="160rem"
                    src="https://www.youtube.com/embed/86XzuPmMriw"
                    frameBorder="0"
                    allow="autoplay; fullscreen; encrypted-media"
                    title="YouTube Video"
                  ></iframe>
                </div>
              </List>
            </div>
          </div>
          <Text
            className="md:ml-[0] mt-[34px] text-white-A700 text-xl"
            size="txtOpenSansRomanBold20WhiteA700"
          >
            All Channels
          </Text>
              
          <div className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full" >
            
          {liveData.map((channel) => {
          // Assuming the channel.url is a YouTube video URL
          const videoId = extractVideoIdFromUrl(channel.url);

          return (
            <div key={channel.id} onClick={() => requestFullScreen(document.documentElement)}>
              {videoId && (
                <iframe
                  width="100%"
                  height="193rem"
                  src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                  allow="autoplay; fullscreen; encrypted-media"
                  title={`Channel ${channel.id}`}
                />
              )}
            </div>
          );
        })}

           
          </div>
          <div
            className="flex sm:flex-col flex-row gap-8 items-start justify-start md:ml-[0] pl-[54px] w-[100%] md:w-full pt-3"
            style={{ borderTop: "1px solid #2d2d2d" }}
          >
            <a
              href="javascript:"
              className="text-base text-white-A700"
              style={{ fontSize: "13px" }}
            >
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/PrivacyPolicy")}
              >
                Privacy Policy
              </Text>
            </a>
            <a
              href="javascript:"
              className="text-base text-white-A700"
              style={{ fontSize: "13px" }}
            >
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/Disclaimer")}
              >
                Disclaimer
              </Text>
            </a>

            <a
              href="javascript:"
              className="text-base text-white-A700"
              style={{ fontSize: "13px" }}
            >
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/TermsConditions")}
              >
                Terms and Conditions
              </Text>
            </a>
            <a
              href="javascript:"
              className="text-base text-white-A700"
              style={{ fontSize: "13px" }}
            >
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/desktop178")}
              >
                Terms Of Use
              </Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channels;
