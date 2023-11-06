import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header1 from "components/Header1";

const MyChannels = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans gap-[45px] items-start justify-start mx-auto py-2 w-full">
        <div className="flex flex-col gap-6 items-center w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="flex flex-col md:px-5 relative w-full">
            <Img
              className="h-[370px] mx-auto object-cover w-full"
              src="images/img_rectangle441.png"
              alt="rectangle441"
            />
            <Img
              className="h-[276px] mb-[31px] ml-5 mt-[-85px] rounded-[50%] w-[276px] z-[1]"
              src="images/img_ellipse70.png"
              alt="ellipseSeventy"
            />
            <div className="flex flex-col items-start justify-start mt-[-200px] ml-[328px] w-[50%] z-[1]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
                size="txtOpenSansRomanBold36"
              >
                Catlin Grim Plays
              </Text>
              <Text
                className="text-white-A700 text-xl"
                size="txtOpenSansRomanRegular20"
              >
                1.2k Subscribers
              </Text>
              <Button
                className="common-pointer cursor-pointer md:ml-[0]  mt-[26px] rounded-br-[3px] rounded-tr-[3px] text-base text-center w-[271px]"
                onClick={() => navigate("/desktop193")}
                color="pink_500"
                size="md"
                variant="fill"
              >
                Upload Movie / Show
              </Button>
            </div>
          </div>
        </div>
        <Text
          className="ml-8 md:ml-[0] md:text-3xl sm:text-[28px] mt-[60px] text-[32px] text-center text-white-A700"
          size="txtOpenSansRomanBold32WhiteA700"
        >
          Movies / Shows
        </Text>
        <div className="flex flex-col items-center pb-[30px] px-2 w-full pl-8 pr-8">
          <div className="flex flex-col items-center justify-start max-w-[1420px] mx-auto md:px-5 w-full">
            <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_160x283.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_2.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_3.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_4.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_160x283.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_2.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_3.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_4.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_160x283.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_2.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_3.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_4.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_160x283.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_2.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_3.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_4.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_160x283.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_2.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_3.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-48 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_4.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-8 items-start justify-start mt-[10px] md:ml-[0] pl-[54px] w-[100%] md:w-full pt-3" style={{borderTop:"1px solid #2d2d2d"}}>
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

export default MyChannels;
