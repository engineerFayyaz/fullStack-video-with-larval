import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, PagerIndicator, RatingBar, Text } from "components";
import FreetoWatch from "components/FreetoWatch";
import TopTen from "components/TopTen";
import Action from "components/Action/Index";
import Adventure from "components/Adventure";
import Talk from "components/Talk";
import SciFi from "components/SciFi";
import NewsUpdates from "components/NewsUpdates";
import Music from "components/Music";
import Religious from "components/Religious";
import Emotinal from "components/Emotinal";
import Banners from "components/Banners";

const HomePage = () => {
  const navigate = useNavigate();

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
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_frame_pink_500.svg"
                  alt="frame"
                />
                <Text
                  className="text-base text-pink-500 w-auto"
                  size="txtOpenSansRomanBold16"
                >
                  Home
                </Text>
              </div>
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
                <div className="text-base text-left text-white-A700">
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
                <div className="text-base text-left text-white-A700">
                  Channels
                </div>
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_search.svg"
                  alt="search"
                />
                <Text
                  className="common-pointer text-base text-white-A700 w-auto"
                  size="txtOpenSansRomanRegular16"
                  onClick={() => navigate("/MyChannels")}
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
              className="common-pointer cursor-pointer flex items-center justify-center min-w-[190px]"
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
        <div className="h-[514px] md:h-[526px] mt-3 md:px-5 relative w-full">


          <Banners/>
          
        </div>
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full">
         <FreetoWatch/>
          <TopTen/>
          <Action/>
          <Adventure/>
          <Talk/>
          <SciFi/>
          <NewsUpdates/>
         <Music/>
         <Religious/>
         <Emotinal/>
          <List
            className="flex flex-col gap-8 items-center w-full"
            orientation="vertical"
          >
            
            
          
            {/* <footer className="flex flex-1 items-center justify-center w-full">
              <div className="flex flex-col gap-4 items-center justify-center w-full">
                <div className="flex md:flex-col flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] mr-[1308px] w-auto">
                  <Text
                    className="text-white-A700 text-xl w-auto"
                    size="txtOpenSansRomanBold20WhiteA700"
                  >
                    Fantasy
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/img_faj2uifuuaul6u_300x210.png"
                          alt="faj2uifuuaul6u"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/img_mv5bntfinzblyme_300x210.png"
                          alt="mv5bntfinzblyme"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/img_yae6uvqijdn411_300x210.png"
                          alt="yae6uvqijdn411"
                        />
                      </div>
                      <div className="md:flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-center w-[47%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/img_faj2uifuuaul6u_1.png"
                          alt="faj2uifuuaul6u_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/img_mv5bntfinzblyme_300x210.png"
                          alt="mv5bntfinzblyme_One"
                        />
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/img_yae6uvqijdn411_1.png"
                          alt="yae6uvqijdn411_One"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[4%] md:w-full">
                        <Img
                          className="h-[300px] md:h-auto object-cover w-full"
                          src="images/img_faj2uifuuaul6u_300x52.png"
                          alt="faj2uifuuaul6u_Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer> */}
          </List>
          <div className="flex sm:flex-col flex-row gap-8 items-start justify-start md:ml-[0] ml-[54px] w-[38%] md:w-full">
            <a href="javascript:" className="text-base text-white-A700">
              <Text size="txtOpenSansRomanRegular16"
               onClick={() => navigate("/desktop180")}
              >Privacy Policy</Text>
            </a>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/desktop181")}
            >
              Disclaimer
            </Text>
            <a href="javascript:" className="text-base text-white-A700">
              <Text size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/desktop179")}
              >Terms and Conditions</Text>
            </a>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              
            >
              Terms of Use
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
