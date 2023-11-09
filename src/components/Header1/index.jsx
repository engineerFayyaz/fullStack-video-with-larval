import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Img, Text } from "components";
import { useUser } from "redux/UserContext";

const Header1 = (props) => {
  const navigate = useNavigate();
  const { userEmail } = useUser();
  const emailPrefix = userEmail ? userEmail.split("@")[0] : "";

  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => {
    // You can add your logout logic here.
    // For example, clear user session data and redirect to the login page.
    // Replace the following lines with your actual logout implementation:
    // clearUserData();
    navigate("/login"); // Redirect to the login page
  };

  const openSearchBar = () => {
    setSearchBarVisible(true);
  };

  const closeSearchBar = () => {
    setSearchBarVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
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
              <Button
                className="common-pointer text-base text-white-A700 w-auto"
                size="txtOpenSansRomanBold16"
                onClick={() => navigate("/MyChannels")}
              >
                My Channel
              </Button>
            </div>
          </div>
          <Img
            className="h-[18px] md:ml-[0] ml-[25px] w-[18px] cursor-pointer sm:hidden"
            src="images/img_search_white_a700.svg"
            alt="search_One"
            onClick={openSearchBar} // Open the search bar
          />
          <div className="relative">
            <Button
              className="cursor-pointer flex flex-row items-center justify-left min-w-[172px] md:ml-[0] ml-[30px]"
              leftIcon={
                <Img
                  className="h-[22px] mb-px mr-[9px]"
                  src="images/img_bipersonfill.svg"
                  alt="bi:person-fill"
                />
              }
              shape="round"
              style={{ backgroundColor: "#001494", width: "fit-content" }}
              size="sm"
              variant="fill"
              onClick={toggleDropdown}
            >
              <div className="font-bold font-opensans text-base text-left pr-3" style={{color:"white"}}>
              {emailPrefix && <p>{emailPrefix.toUpperCase()}</p>}
              </div>
              {dropdownVisible && (
                <div
                  className="absolute bg-blue-900 z-50 flex flex-col items-start p-4 right-0 top-0 w-full mt-[32px]"
                  style={{
                    marginTop: "60px",
                    marginLeft: "-13px",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  <Text
                    className="common-pointer md:ml-[0] ml-[33px] mt-1 text-base text-white"
                    size="txtOpenSansRomanRegular16"
                    onClick={() => navigate("/Profile")}
                  >
                    Profile
                  </Text>
                  <Text
                    className="common-pointer md:ml-[0] ml-[33px] mt-[26px] text-base text-white"
                    size="txtOpenSansRomanRegular16"
                    onClick={() => navigate("/MyWishlist")}
                  >
                    Wishlist
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[33px] mt-[25px] text-base text-white"
                    size="txtOpenSansRomanRegular16"
                  >
                    Notification
                  </Text>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] mt-[26px] w-[78%] md:w-full">
                    <div className="flex flex-row gap-[35px] items-center justify-between w-full">
                      <Text
                        className="text-base text-white"
                        size="txtOpenSansRomanRegular16"
                      >
                        Email Notification
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] mt-7">
                    <Text
                      className="text-base text-white"
                      size="txtOpenSansRomanRegular16"
                    >
                      Language
                    </Text>
                  </div>
                  <a
                    href="javascript:"
                    className="md:ml-[0] ml-[33px] mt-6 text-base text-white"
                  >
                    <Text size="txtOpenSansRomanRegular16">Contact Us</Text>
                  </a>
                  <a
                    className="md:ml-[0] ml-[33px] mt-[27px] text-base text-white cursor-pointer"
                    onClick={handleLogout}
                  >
                    <Text size="txtOpenSansRomanRegular16">Log Out</Text>
                  </a>
                </div>
              )}
            </Button>
          </div>
        </div>
      </header>
      {searchBarVisible && (
        <div className="relative top-0 left-0 w-full h-16 bg-gray-900 z-10 sm:hidden">
          <div className="pl-4 pr-4 flex items-center justify-between h-16 w-[100%]">
            <input
              type="text"
              className="w-full p-2 text-white placeholder-white-500"
              style={{ borderRadius: "2px" }}
              placeholder="Search..."
            />
            <Button
              className="cursor-pointer bg-transparent ml-2"
              leftIcon={
                <Img className="h-6 w-6" src="images/close.png" alt="Close" />
              }
              onClick={closeSearchBar}
            />
            <Button
              className="cursor-pointer p-2"
              style={{
                position: "absolute",
                top: "13px",
                right: "52px",
                color: "white",
                backgroundColor: "#015DEF",
                borderRadius: "5px",
              }}
              onClick={() => {
                alert("No result Found....! try again later..");
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
