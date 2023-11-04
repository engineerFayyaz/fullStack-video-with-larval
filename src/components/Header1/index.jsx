import React from "react";

import { useNavigate , useLocation} from "react-router-dom";

import { Button, Img, Text } from "components";

const Header1 = (props , userName) => {
  const navigate = useNavigate();
  // console.log("username",userName)
  const location = useLocation();
  const email = location.state ? location.state.email : null;

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-20 sm:h-auto object-cover w-[6%] md:w-full"
          src="images/img_whatsappimage.png"
          alt="whatsappimage"
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
                src="images/img_search_pink_500.svg"
                alt="search"
              />
              <Text
                className="common-pointer text-base text-pink-500 w-auto"
                size="txtOpenSansRomanBold16"
                onClick={() => navigate("/MyChannels")}
              >
                My Channel
              </Text>
            </div>
          </div>
          <Img
            className="h-[18px] md:ml-[0] ml-[25px] w-[18px]"
            src="images/img_search_white_a700.svg"
            alt="search_One"
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
            color="pink_500"
            size="sm"
            variant="fill"
          >
            <div className="font-bold font-opensans text-base text-center">
            {email && <p>Email: {email}</p>}
            </div>
          </Button>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
