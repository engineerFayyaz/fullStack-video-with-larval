import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { Img, List, Text } from "components";

import Header1 from "components/Header1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-toastify";
import Banners from "components/Banners";

const Channels = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [liveData, setLiveData] = useState([]);
  const email = location.state ? location.state.email : null;


  const createCarouselSettings = () => {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
    };
  };

  useEffect(() => {
    // Define the API URL
    const apiUrl = " https://ourbrandtv.com/mobile/public/api/series";
    const liveapi = " https://ourbrandtv.com/mobile/public/api/live";
    // Make the API request
    axios
      .get(apiUrl)
      .then((response) => {

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
        if (Array.isArray(response.data.data)) {
          setLiveData(response.data.data);
        } else {
          toast.error('Unexpected API response structure')
        }

        setLoading(false);
      })
      .catch((error) => {
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
          <Banners/>
        </div>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full pl-3" style={{marginTop:"210px"}}>
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
                            src={`https://ourbrandtv.com/admin/assets/global/series_thumb/${movie.series_id}.jpg`}
                            alt={movie.title}
                            className="common-pointer h-[250px] md:h-auto  w-full"
                            style={{ width: "180px" }}
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
};

export default Channels;
