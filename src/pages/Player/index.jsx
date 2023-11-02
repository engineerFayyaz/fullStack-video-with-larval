import React from "react";

import { Img, Line, Text } from "components";

const PlayerPage = () => {
  return (
    <>
      <div
        className="bg-cover bg-gray-900_02 bg-no-repeat flex flex-col font-poppins h-[1024px] items-center justify-end mx-auto p-3 w-full"
        style={{ backgroundImage: "url('images/img_player.png')" }}
      >
        <div className="flex flex-col gap-4 items-center justify-start max-w-[1409px] mb-0.5 mt-[915px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
            <div className="h-[18px] relative w-[95%] md:w-full">
              <div className="bg-pink-500 h-[18px] mb-[-6px] ml-[158px] mt-auto rounded-[50%] w-[18px] z-[1]"></div>
              <div className="h-1.5 mt-auto mx-auto w-full">
                <Line className="bg-gray-700 h-1.5 m-auto w-full" />
                <Line className="absolute bg-pink-500 h-1.5 inset-y-[0] left-[0] my-auto w-[14%]" />
              </div>
            </div>
            <Text
              className="text-gray-100 text-right text-xl"
              size="txtPoppinsRegular20"
            >
              1:25:00
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-opensans md:gap-5 items-start justify-start w-[99%] md:w-full">
            <Img
              className="h-8 w-8"
              src="images/img_iconplay.svg"
              alt="iconplay"
            />
            <Img
              className="h-8 ml-4 md:ml-[0] w-8"
              src="images/img_iconskip152.svg"
              alt="iconskip152"
            />
            <Img
              className="h-8 ml-4 md:ml-[0] w-8"
              src="images/img_iconskip151.svg"
              alt="iconskip151"
            />
            <Img
              className="h-8 ml-4 md:ml-[0] w-8"
              src="images/img_iconvoice.svg"
              alt="iconvoice"
            />
            <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-center md:ml-[0] ml-[299px] md:mt-0 mt-0.5 w-[33%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtOpenSansRomanBold24"
              >
                Squid Game S1 E1
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                size="txtOpenSansRomanRegular24"
              >
                The End’s Beginning
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-between md:ml-[0] ml-[239px] w-[17%] md:w-full">
              <Img
                className="h-8 w-8"
                src="images/img_iconhelp.svg"
                alt="iconhelp"
              />
              <Img
                className="h-8 w-8"
                src="images/img_iconforward.svg"
                alt="iconforward"
              />
              <Img
                className="h-8 w-8"
                src="images/img_iconpip.svg"
                alt="iconpip"
              />
              <Img className="h-8 w-8" src="images/img_user.svg" alt="user" />
              <Img
                className="h-8 w-8"
                src="images/img_iconfullscreen.svg"
                alt="iconfullscreen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerPage;
