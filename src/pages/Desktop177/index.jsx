import React from "react";

import { Button, Img, List, RatingBar, Text } from "components";
import Header from "components/Header";

const Desktop177Page = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto p-2 shadow-bs1 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1376px] mb-[100px] mx-auto md:px-5 w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
          <div className="flex flex-col items-center justify-start mt-[54px]">
            <Text
              className="text-gray-100 text-xl"
              size="txtOpenSansRomanBold20"
            >
              My Wishlist
            </Text>
          </div>
          <List
            className="flex flex-col gap-[30px] items-center mt-[50px] w-[98%]"
            orientation="vertical"
          >
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="md:flex-1 h-[300px] sm:h-auto object-cover w-[16%] md:w-full"
                src="images/img_faj2uifuuaul6u.png"
                alt="faj2uifuuaul6u"
              />
              <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[120px] w-[41%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-gray-100 text-right text-xl"
                  size="txtOpenSansRomanBold20"
                >
                  Netflix’s Original
                </Text>
                <div className="flex flex-col mt-[5px] relative w-full">
                  <Text
                    className="mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-gray-100 text-right"
                    size="txtOpenSansRomanExtraBold50"
                  >
                    Squid Game Season 1
                  </Text>
                  <div className="flex flex-row font-poppins gap-[38px] items-center justify-between ml-[5px] mt-[-0.58px] w-[49%] z-[1]">
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
                </div>
                <div className="flex flex-row font-poppins gap-5 items-center justify-start mt-2.5 w-[46%] md:w-full">
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
              <Img
                className="h-10 md:ml-[0] ml-[440px]"
                src="images/img_bookmark.svg"
                alt="bookmark"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="md:flex-1 h-[300px] sm:h-auto object-cover w-[16%] md:w-full"
                src="images/img_mv5bntfinzblyme.png"
                alt="mv5bntfinzblyme"
              />
              <div className="flex md:flex-1 flex-col gap-2 items-start justify-start md:ml-[0] ml-[120px] w-3/5 md:w-full">
                <Text
                  className="md:ml-[0] ml-[5px] text-gray-100 text-right text-xl"
                  size="txtOpenSansRomanBold20"
                >
                  Marvel’s
                </Text>
                <div className="flex flex-col relative w-full">
                  <Text
                    className="mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-gray-100 text-right"
                    size="txtOpenSansRomanExtraBold50"
                  >
                    Venom 2: Let There be Carnage
                  </Text>
                  <div className="flex flex-row font-poppins gap-[19px] items-center justify-start ml-[5px] mt-[-0.98px] w-[44%] z-[1]">
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
                        Runtime:{" "}
                      </span>
                      <span className="text-gray-100 font-opensans font-bold">
                        1 hr, 37 min
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-5 items-center justify-start w-[31%] md:w-full">
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
              <Img
                className="h-10 md:ml-[0] ml-[185px]"
                src="images/img_bookmark.svg"
                alt="bookmark"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="md:flex-1 h-[300px] sm:h-auto object-cover w-[16%] md:w-full"
                src="images/img_yae6uvqijdn411.png"
                alt="yae6uvqijdn411"
              />
              <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[120px] w-[32%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-gray-100 text-right text-xl"
                  size="txtOpenSansRomanBold20"
                >
                  Netflix’s Original
                </Text>
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-100"
                  size="txtOpenSansRomanExtraBold50"
                >
                  Lucifer Season 1
                </Text>
                <div className="flex flex-row font-poppins gap-[38px] items-center justify-start ml-1.5 md:ml-[0] mt-[5px] w-[64%] md:w-full">
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
                    size="txtPoppinsBold20"
                  >
                    <span className="text-gray-100 font-opensans font-normal">
                      Seasons:{" "}
                    </span>
                    <span className="text-gray-100 font-opensans font-bold">
                      6
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row font-poppins gap-5 items-center justify-start mt-2.5 w-3/5 md:w-full">
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
              <Img
                className="h-10 md:ml-[0] ml-[568px]"
                src="images/img_bookmark.svg"
                alt="bookmark"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="md:flex-1 h-[300px] sm:h-auto object-cover w-[16%] md:w-full"
                src="images/img_faj2uifuuaul6u.png"
                alt="faj2uifuuaul6u"
              />
              <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[120px] w-[41%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[3px] text-gray-100 text-right text-xl"
                  size="txtOpenSansRomanBold20"
                >
                  Netflix’s Original
                </Text>
                <div className="flex flex-col mt-[5px] relative w-full">
                  <Text
                    className="mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-gray-100 text-right"
                    size="txtOpenSansRomanExtraBold50"
                  >
                    Squid Game Season 1
                  </Text>
                  <div className="flex flex-row font-poppins gap-[38px] items-center justify-between ml-[5px] mt-[-0.58px] w-[49%] z-[1]">
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
                </div>
                <div className="flex flex-row font-poppins gap-5 items-center justify-start mt-2.5 w-[46%] md:w-full">
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
              <Img
                className="h-10 md:ml-[0] ml-[440px]"
                src="images/img_bookmark.svg"
                alt="bookmark"
              />
            </div>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Img
                className="md:flex-1 h-[300px] sm:h-auto object-cover w-[16%] md:w-full"
                src="images/img_mv5bntfinzblyme.png"
                alt="mv5bntfinzblyme"
              />
              <div className="flex md:flex-1 flex-col gap-2 items-start justify-start md:ml-[0] ml-[120px] w-3/5 md:w-full">
                <Text
                  className="md:ml-[0] ml-[5px] text-gray-100 text-right text-xl"
                  size="txtOpenSansRomanBold20"
                >
                  Marvel’s
                </Text>
                <div className="flex flex-col relative w-full">
                  <Text
                    className="mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-gray-100 text-right"
                    size="txtOpenSansRomanExtraBold50"
                  >
                    Venom 2: Let There be Carnage
                  </Text>
                  <div className="flex flex-row font-poppins gap-[19px] items-center justify-start ml-[5px] mt-[-0.98px] w-[44%] z-[1]">
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
                        Runtime:{" "}
                      </span>
                      <span className="text-gray-100 font-opensans font-bold">
                        1 hr, 37 min
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row font-poppins gap-5 items-center justify-start w-[31%] md:w-full">
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
              <Img
                className="h-10 md:ml-[0] ml-[185px]"
                src="images/img_bookmark.svg"
                alt="bookmark"
              />
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default Desktop177Page;
