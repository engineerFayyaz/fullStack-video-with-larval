import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, PagerIndicator, Text } from "components";

const Desktop190Page = () => {
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
                <div className="text-base text-left text-white-A700">Home</div>
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
                <div className="text-base text-left text-white-A700">
                  Movies
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[104px]"
                onClick={() => navigate("/Channels")}
                leftIcon={
                  <Img
                    className="h-[22px] mt-px mr-2"
                    src="images/img_television_pink_500.svg"
                    alt="television"
                  />
                }
              >
                <div className="font-bold text-base text-left text-pink-500">
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
              className="cursor-pointer flex items-center justify-center min-w-[190px]"
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
        <div className="font-poppins h-[514px] md:h-[526px] mt-3 md:px-5 relative w-full">
          <Img
            className="h-[514px] m-auto object-cover w-full"
            src="images/img_lucifers1_514x1440.png"
            alt="lucifersOne"
          />
          <PagerIndicator
            className="absolute bottom-[2%] flex h-6 inset-x-[0] justify-center mx-auto w-[194px]"
            count={6}
            activeCss="inline-block cursor-pointer rounded-[50%] h-6 border-gray-100 border-2 border-solid bg-gray-100 w-6 relative"
            activeIndex={1}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-6 border-gray-100 border-2 border-solid w-6 relative"
            selectedWrapperCss="inline-block mx-[5.00px]"
            unselectedWrapperCss="inline-block mx-[5.00px]"
          />
          <div className="absolute bottom-[22%] flex flex-col items-start justify-start left-[2%] w-1/5">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-100"
              size="txtPoppinsBlack50"
            >
              A+ Cinema
            </Text>
            <div className="flex flex-row font-opensans gap-[90px] items-center justify-start mt-0.5 w-[89%] md:w-full">
              <Text
                className="text-base text-gray-100 text-right"
                size="txtOpenSansRomanBold16Gray100"
              >
                Featured
              </Text>
              <Text
                className="text-base text-gray-100"
                size="txtOpenSansRomanBold16Gray100"
              >
                Shows: 158
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-opensans justify-start max-w-[1432px] mb-[29px] mt-8 mx-auto overflow-auto md:px-5 w-full">
          <div className="sm:h-56 h-60 md:h-[401px] relative w-full">
            <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[17px] inset-x-[0] items-center justify-between mx-auto w-full">
              <div className="h-56 sm:h-[360px] relative w-3/5 md:w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[33%] sm:w-full">
                      <Img
                        className="h-40 md:h-auto object-cover w-full"
                        src="images/img_faj2uifuuaul6u_160x283.png"
                        alt="faj2uifuuaul6u"
                      />
                    </div>
                    <div className="flex sm:flex-1 flex-col items-center justify-start w-[33%] sm:w-full">
                      <Img
                        className="h-40 md:h-auto object-cover w-full"
                        src="images/img_faj2uifuuaul6u_3.png"
                        alt="faj2uifuuaul6u_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute h-56 inset-[0] justify-center m-auto w-[45%] sm:w-full">
                  <Img
                    className="h-56 m-auto object-cover rounded-[25px] w-full"
                    src="images/img_faj2uifuuaul6u_224x397.png"
                    alt="faj2uifuuaul6u_Two"
                  />
                  <div className="absolute bottom-[4%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[27%]">
                    <Img
                      className="h-20 w-20"
                      src="images/img_play.svg"
                      alt="play"
                    />
                    <Text
                      className="mt-[31px] text-base text-white-A700"
                      size="txtOpenSansRomanBold16WhiteA700"
                    >
                      190 LORIMER
                    </Text>
                    <Text
                      className="mt-0.5 text-gray-100 text-right text-xs"
                      size="txtOpenSansRomanBold12"
                    >
                      Resolution:4k
                    </Text>
                    <Text
                      className="mt-[3px] text-gray-100 text-right text-xs"
                      size="txtOpenSansRomanBold12"
                    >
                      Shows: 85
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-4 grid sm:grid-cols-1 grid-cols-2 w-2/5 md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-40 md:h-auto object-cover w-full"
                    src="images/img_faj2uifuuaul6u_4.png"
                    alt="faj2uifuuaul6u"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-40 md:h-auto object-cover w-full"
                    src="images/img_faj2uifuuaul6u_5.png"
                    alt="faj2uifuuaul6u"
                  />
                </div>
              </List>
            </div>
            <div className="absolute flex flex-row gap-1 items-center justify-evenly left-[0] top-[0] w-auto">
              <Text
                className="text-white-A700 text-xl w-auto"
                size="txtOpenSansRomanBold20WhiteA700"
              >
                Mostly Watched
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[92%] md:w-full">
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Top 10 in your country
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright_One"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 justify-center w-full"
                orientation="horizontal"
              >
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_1.svg"
                    alt="One"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-5.5px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_4.png"
                      alt="image_One"
                    />
                  </div>
                </div>
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_2.svg"
                    alt="Two"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-24.35px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_5.png"
                      alt="image_One"
                    />
                  </div>
                </div>
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_3.svg"
                    alt="Three"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-25.75px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_6.png"
                      alt="image_One"
                    />
                  </div>
                </div>
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_4.svg"
                    alt="Four"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-41.5px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_7.png"
                      alt="image_One"
                    />
                  </div>
                </div>
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_5.svg"
                    alt="Five"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-23.33px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_8.png"
                      alt="image_One"
                    />
                  </div>
                </div>
                <div className="flex relative w-full">
                  <Img
                    className="h-[185px] my-auto"
                    src="images/img_6.svg"
                    alt="Six"
                  />
                  <div className="flex flex-col items-center justify-start ml-[-28.33px] my-auto rounded w-auto z-[1]">
                    <Img
                      className="h-[185px] md:h-auto object-cover rounded w-[132px] sm:w-full"
                      src="images/img_image_2.png"
                      alt="image_One"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[17px] mt-[34px] text-white-A700 text-xl"
            size="txtOpenSansRomanBold20WhiteA700"
          >
            All Channels
          </Text>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[17px] w-full">
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <Img
                className="common-pointer h-48 md:h-auto object-cover w-full"
                src="images/img_faj2uifuuaul6u_160x283.png"
                alt="faj2uifuuaul6u"
                onClick={() => navigate("/detailsone")}
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
          <div className="flex sm:flex-col flex-row gap-8 items-start justify-start md:ml-[0] ml-[54px] mt-[30px] w-[38%] md:w-full">
            <a href="javascript:" className="text-base text-white-A700">
              <Text size="txtOpenSansRomanRegular16">Privacy Policy</Text>
            </a>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
            >
              Disclaimer
            </Text>
            <a href="javascript:" className="text-base text-white-A700">
              <Text size="txtOpenSansRomanRegular16">Terms and Conditions</Text>
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

export default Desktop190Page;
