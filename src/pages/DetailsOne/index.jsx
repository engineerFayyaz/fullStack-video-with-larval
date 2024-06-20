import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, RatingBar, Text } from "components";
import Header1 from "components/Header";

const DetailsOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900_02 flex flex-col font-opensans items-center justify-start mx-auto pr-2 py-2 w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="h-[924px] md:h-[939px] max-w-[1421px] mt-[15px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[924px] m-auto object-cover w-full"
            src="images/img_lucifers1_1.png"
            alt="lucifersOne"
          />
          <div className="absolute bottom-[2%] flex flex-col md:gap-10 gap-[71px] justify-start left-[4%] w-[77%]">
            <Img
              className="common-pointer h-64 md:ml-[0] ml-[523px] w-64"
              src="images/img_group163539.svg"
              alt="group163539"
              onClick={() => navigate("/player")}
            />
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Text
                className="text-base text-gray-100 text-right"
                size="txtOpenSansRomanBold16Gray100"
              >
                Ourbrandtv Original
              </Text>
              <div className="md:h-[137px] h-[198px] relative w-full">
                <Text
                  className="absolute inset-x-[0] mx-auto md:text-5xl text-[100px] text-gray-100 text-right top-[0] w-max"
                  size="txtOpenSansRomanExtraBold100"
                >
                  Squid Game Season 1
                </Text>
                <Img
                  className="absolute bottom-[5%] h-10 left-[30%]"
                  src="images/img_bookmark_gray_100.svg"
                  alt="bookmark"
                />
                <div className="absolute bottom-[0] flex flex-col font-poppins items-center justify-start left-[0] w-1/4">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex flex-row gap-[38px] items-center justify-between ml-1.5 md:ml-[0] w-[98%] md:w-full">
                      <Text
                        className="text-gray-100 text-right text-xl"
                        size="txtPoppinsBold20"
                      >
                        <span className="text-gray-100 font-opensans font-normal">
                          Resolution:
                        </span>
                        <span className="text-gray-100 font-opensans font-bold">
                          4k
                        </span>
                      </Text>
                      <Text
                        className="text-gray-100 text-right text-xl"
                        size="txtPoppinsRegular20"
                      >
                        <span className="text-gray-100 font-opensans font-normal">
                          Seasons:{" "}
                        </span>
                        <span className="text-gray-100 font-opensans font-bold">
                          1
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-[92%] md:w-full">
                      <div className="flex flex-row items-center justify-evenly w-[78%]">
                        <RatingBar
                          className="flex justify-between w-[190px]"
                          value={5}
                          starCount={5}
                          activeColor="#f1c644"
                          size={30}
                        ></RatingBar>
                      </div>
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        5/5
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1329px] mb-10 mt-8 mx-auto md:px-5 w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
            size="txtOpenSansRomanBold32"
          >
            Desciption
          </Text>
          <Text
            className="mt-5 text-gray-100 text-sm w-full"
            size="txtNunitoSansRegular14"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.{" "}
          </Text>
          <div className="flex flex-col font-poppins gap-2.5 items-start justify-start mt-[22px]">
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Seasons:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                1
              </span>
            </Text>
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Genre:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                Action, Thriller, Survival, Drama
              </span>
            </Text>
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Directed by:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                Hwang Dong-hyuk
              </span>
            </Text>
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Written by:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                Hwang Dong-hyuk
              </span>
            </Text>
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Starring:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                <>
                  Lee Jung-jae, Park Hae-soo, Wi Ha-joon, Jung Ho-yeon, O
                  Yeong-su, Heo Sung-tae,Anupam Tripathi, Kim Joo-ryoung
                </>
              </span>
            </Text>
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Production Companies:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                Ourbrandtv
              </span>
            </Text>
            <Text className="text-gray-100 text-xl" size="txtPoppinsRegular20">
              <span className="text-gray-100 font-opensans text-left font-normal">
                Original release:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                September 17, 2021
              </span>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsOnePage;
