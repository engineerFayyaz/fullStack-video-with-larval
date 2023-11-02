import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, PagerIndicator, RatingBar, Text } from "components";

const Desktop188Page = () => {
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
                onClick={() => navigate("/HomePage")}
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
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_svgexport6.svg"
                  alt="svgexportSix"
                />
                <Text
                  className="text-base text-pink-500 w-auto"
                  size="txtOpenSansRomanRegular16Pink500"
                >
                  Movies
                </Text>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[100px]"
                onClick={() => navigate("/desktop189")}
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
                  onClick={() => navigate("/desktopthirtyseven")}
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
        <div className="h-[514px] md:h-[526px] mt-3 md:px-5 relative w-full">
          <Img
            className="h-[514px] m-auto object-cover w-full"
            src="images/img_lucifers1.png"
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
          <div className="absolute bottom-[13%] flex flex-col items-start justify-start left-[2%] w-[33%]">
            <Text
              className="text-base text-gray-100 text-right"
              size="txtOpenSansRomanBold16Gray100"
            >
              HBO
            </Text>
            <div className="flex flex-col font-poppins mt-3.5 relative w-full">
              <Text
                className="mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-gray-100"
                size="txtPoppinsBlack50"
              >
                Meg 2: The Trench
              </Text>
              <div className="flex flex-row font-opensans gap-[53px] items-start justify-start mt-[-6.72px] w-[72%] z-[1]">
                <Text
                  className="text-base text-gray-100 text-right"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Resolution:4k
                </Text>
                <Text
                  className="text-base text-gray-100 text-right"
                  size="txtOpenSansRomanBold16Gray100"
                >
                  Runtime: 1 hr, 37 min
                </Text>
              </div>
            </div>
            <div className="flex flex-row font-poppins gap-5 items-center justify-start mt-[17px] w-[53%] md:w-full">
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
        <div className="flex flex-col gap-8 items-start justify-start max-w-[1432px] mb-2 mt-8 mx-auto overflow-auto md:px-5 w-full">
          <List
            className="flex flex-col gap-8 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-4 justify-start my-0 w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Free to Watch
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
            <div className="flex flex-1 flex-col gap-4 justify-start my-0 w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Featured
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
          </List>
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
                  alt="arrowright"
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
                      src="images/img_image.png"
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
                      src="images/img_image_185x132.png"
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
                      src="images/img_image_1.png"
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
                      src="images/img_image_2.png"
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
                      src="images/img_image_3.png"
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
          <List
            className="flex flex-col gap-8 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Action
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
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Adventure
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
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Animation
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
            <div className="flex flex-1 flex-col gap-4 justify-start w-full">
              <div className="flex flex-row gap-1 items-center justify-start md:ml-[0] ml-[17px] w-auto">
                <Text
                  className="text-white-A700 text-xl w-auto"
                  size="txtOpenSansRomanBold20WhiteA700"
                >
                  Drama
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
            <footer className="flex flex-1 items-center justify-center w-full">
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
            </footer>
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

export default Desktop188Page;
