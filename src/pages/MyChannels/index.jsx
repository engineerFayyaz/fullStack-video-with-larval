import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import the Slider component from react-slick
import { Button, Img, List, Text } from "components";
import ChannelBanner from "components/ChannelBanner";
import { useUser } from "redux/UserContext";
import Header1 from "components/Header1";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MyChannels = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const { userEmail } = useUser();
  const loggedInEmail = userEmail || "";
  const [uploadCount, setUploadCount] = useState(0); // State to store the upload count
  const age = useUser().age;
  const emailPrefix = userEmail ? userEmail.split("@")[0] : "";
  const displayAge = age ? age : Math.floor(Math.random() * (99 - 18 + 1)) + 18;


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Adjust the number of slides to show
    slidesToScroll: 6, // Adjust the number of slides to scroll
  };

  useEffect(() => {
    const apiUrl = " https://ourbrandtv.com/mobile/public/api/series";
  
    axios
      .get(apiUrl)
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setData(response.data.data);
          const userUploadCount = response.data.data.filter(
            (movie) => movie.uploaded_by === userEmail
          ).length;
          setUploadCount(userUploadCount);
        } else {
          console.error("Unexpected API response structure");
        }
  
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  
    // Retrieve uploadCount from localStorage
    const getUploadSuccessCount = () => {
      const localStorageKey = `uploadSuccessCount_${loggedInEmail}`;
      const existingData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
      return existingData.successCount || 0;
    };
  
    const uploadSuccessCount = getUploadSuccessCount();
  }, [userEmail]);
  

  const createRows = () => {
    const rows = [];
    const itemsPerRow = 6;

    for (let i = 0; i < data.length; i += itemsPerRow) {
      const row = data.slice(i, i + itemsPerRow);
      rows.push(row);
    }

    return rows;
  };

  const handleUploadButtonClick = () => {
    // Use the updater function to ensure proper state update based on the current state
    setUploadCount((prevCount) => {
      const updatedCount = prevCount + 1;
  
      // Store the updated count in localStorage
      localStorage.setItem("uploadCount", updatedCount);
  
      // Navigate to the UploadMovie page
      navigate("/UploadMovie");
  
      // Return the updated count to set the state
      return updatedCount;
    });
  };
 
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans gap-[45px] items-start justify-start mx-auto py-2 w-full">
        <div className="flex flex-col gap-6 items-center w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col md:px-5 relative w-full">
            <Img
              className="h-[370px] mx-auto object-cover w-full sm:h-[fit-content]"
              src="images/img_rectangle441.png"
              alt="rectangle441"
            />
            <Img
              className="h-[276px] mb-[31px] ml-3 mt-[-49px] rounded-[50%] w-[276px] z-[1] sm:h-[fit-content] sm:w-[100px] sm:mt-[-19px] sm:ml-0"
              src="images/img_ellipse70.png"
              alt="ellipseSeventy"
            />
            <div className="flex flex-col items-start justify-start mt-[-250px] ml-[20rem] w-[40%] sm:w-[50%] sm:mt-[-111px] sm:ml-[107px] z-[1]">
              <Text
                className="text-4xl sm:text-[18px] md:text-[34px] text-center text-white-A700"
                size="txtOpenSansRomanBold36"
              >
                {emailPrefix && <p>{emailPrefix.toUpperCase()}</p>}
              </Text>
              <Text
                className="text-white-A700 text-xl sm:text-[13px]"
                size="txtOpenSansRomanRegular20"
              >
                 {localStorage.getItem("uploadSuccessCount")} Movies Uploaded
              </Text>
              <Button
                className="common-pointer btn cursor-pointer md:ml-[0]  mt-[6px] rounded-br-[3px] rounded-tr-[3px] text-base text-center w-[271px] sm:w-[fit-content] sm:p-[3px] sm:text-[10px]"
                onClick={() => {
                  handleUploadButtonClick(); // Call your function
                  navigate("/UploadMovie"); // Navigate after calling the function
                }}
                color="pink_500"
                size="md"
                variant="fill"
              >
                Upload Movie / Show
              </Button>

              {/* <br/> */}

              <div className="flex flex-col items-start justify-start mt-[-67px] ml-[290px] w-[70%] z-[1] sm:mt-[-36px] sm:ml-[110px] " >
              <Button
                className="common-pointer btn cursor-pointer md:ml-[0]  mt-[6px] rounded-br-[3px] rounded-tr-[3px] text-base text-center w-[271px] sm:w-[fit-content] sm:p-[3px] sm:text-[10px]"
                onClick={() => {
                  handleUploadButtonClick(); // Call your function
                  navigate("/ScheduleMovie"); // Navigate after calling the function
                }}
                color="pink_500"
                size="md"
                variant="fill"
              >
                Schedule Movie / Show
              </Button>

              
              </div>
              
            </div>
          </div>
          
        </div>
        
        <Text
          className="ml-8 md:ml-[0] md:text-3xl sm:text-[28px] mt-[60px] text-[32px] text-center text-white-A700"
          size="txtOpenSansRomanBold32WhiteA700"
        >
          Movies / Shows
        </Text>
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
                            src={`https://ourbrandtv.com/admin/assets/global/series_thumb/${movie.series_id}.jpg`}
                            alt={movie.title}
                            className="common-pointer h-[250px] md:h-auto  w-full" style={{width:"180px"}}
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

export default MyChannels;
