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
  const email = location.state ? location.state.email : null;

  useEffect(() => {
    // Define the API URL
    const apiUrl = "http://mobile.codegifted.com/api/series";

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
      <Header1 className=" flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full"/>
        <div className="font-poppins h-[514px] md:h-[526px] mt-3 md:px-5 relative w-full">
          <ChannelBanner />
        </div>
        //all series can be get there:
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
                            className="common-pointer h-[250px] md:h-auto  w-full" style={{width:"180px"}}
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
                  src="https://www.youtube.com/embed/Bgqq9gpuDnc"
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
                    src="https://www.youtube.com/embed/3ni9YJHkKHw"
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
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center pr-5 min-h-[auto] mt-[17px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/ydYDqZQpim8"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/RBikkVw4maE"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/lFPG2B7hJs0"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/MIA8AKVZ0Yk"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/-QpxsY5anoc"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/Vm2SwtQVTLY"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/3ni9YJHkKHw"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/d-Prr4NkPmk"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/-OMckPM0Gao"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/36YnV9STBqc"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/4zpDEDyF9dc"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/86XzuPmMriw"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/VSZg7mjOd84"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/tkDUSYHoKxE"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/Fgm9UAzdzQY"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/34H1XIjnfKM"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/tyVQk-BAWms"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/TG4fFNVoEQQ"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/we2YjI3IzPk"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                width="100%"
                height="193rem"
                src="https://www.youtube.com/embed/yI3H8Dnrn9M"
                allow="autoplay; fullscreen; encrypted-media"
                title="YouTube Video"
              />
            </div>
          </div>
            <div className="flex sm:flex-col flex-row gap-8 items-start justify-start md:ml-[0] pl-[54px] w-[100%] md:w-full pt-3" style={{borderTop:"1px solid #2d2d2d"}}>
            <a
              href="javascript:"
              className="text-base text-white-A700"
              style={{ fontSize: "13px" }}
            >
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/desktop180")}
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
                onClick={() => navigate("/desktop181")}
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
                onClick={() => navigate("/desktop179")}
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
