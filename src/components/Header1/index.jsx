import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Img, Text } from "components";

const Header1 = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state ? location.state.email : null;

  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const openSearchBar = () => {
    setSearchBarVisible(true);
  };

  const closeSearchBar = () => {
    setSearchBarVisible(false);
  };

  return (
    <>
      <header className={`${props.className} pl-4 pr-4`}>
        <Img
          className="h-20 sm:h-auto object-cover w-[7%] md:w-full"
          src="images/logo.png"
          alt="OurBrandTV"
        />
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[528px] md:mt-0 my-[19px] w-[56%] md:w-full">
          <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[65%] md:w-full">
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[76px]"
              onClick={() => navigate("/")}
              leftIcon={
                <Img
                  className="h-[22px] mb-px mr-2"
                  src="images/img_frame.svg"
                  alt="Frame"
                />
              }
            >
              <div className="font-opensans text-base text-left text-white-A700">
                Home
              </div>
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[83px]"
              onClick={() => navigate("/movies")}
              leftIcon={
                <Img
                  className="h-[22px] mb-px mr-2"
                  src="images/img_svgexport6_white_a700.svg"
                  alt="svgexport-6"
                />
              }
            >
              <div className="font-opensans text-base text-left text-white-A700">
                Movies
              </div>
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[100px]"
              onClick={() => navigate("/Channels")}
              leftIcon={
                <Img
                  className="h-[22px] mt-px mr-2"
                  src="images/img_television.svg"
                  alt="television"
                />
              }
            >
              <div className="font-opensans text-base text-left text-white-A700">
                Channels
              </div>
            </Button>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Img
                className="h-6 w-6"
                src="images/user-icon-white.png"
                alt="search"
                onClick={openSearchBar} // Open the search bar
              />
              <Text
                className="common-pointer text-base text-white-A700 w-auto"
                size="txtOpenSansRomanBold16"
                onClick={() => navigate("/MyChannels")}
              >
                My Channel
              </Text>
            </div>
          </div>
          <Img
            className="h-[18px] md:ml-[0] ml-[25px] w-[18px] cursor-pointer sm:hidden"
            src="images/img_search_white_a700.svg"
            alt="search_One"
            onClick={openSearchBar} // Open the search bar
          />
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[172px] md:ml-[0] ml-[50px]"
            leftIcon={
              <Img
                className="h-[22px] mb-px mr-[9px]"
                src="images/img_bipersonfill.svg"
                alt="bi:person-fill"
              />
            }
            shape="round"
            style={{ backgroundColor: "#015DEF" }}
            size="sm"
            variant="fill"
          >
            <div className="font-bold font-opensans text-base text-center">
              {email && <p>Email: {email}</p>}
            </div>
          </Button>
        </div>
      </header>
      {searchBarVisible && (
        <div className="relative top-0 left-0 w-full h-16 bg-gray-900 z-10 sm:hidden">
          <div className="pl-4 pr-4 flex items-center justify-between h-16 w-[100%]">
            <input
              type="text"
              className="w-full p-2  text-white placeholder-white-500"
              style={{borderRadius:"2px"}}
              placeholder="Search..."
            />
            <Button
              className="cursor-pointer bg-transparent ml-2"
              leftIcon={
                <Img
                  className="h-6 w-6"
                  src="images/close.png"
                  alt="Close"
                />
              }
              onClick={closeSearchBar} 
            />
            <Button
              className="cursor-pointer p-2 "
             
             style={{position:"absolute",top:"13px",right:"52px",color:"white",backgroundColor: "#015DEF",borderRadius:"5px"}}
              onClick={() => {
                alert("No result Found....! try agin later..")
              }}
              
            >
              Search
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
