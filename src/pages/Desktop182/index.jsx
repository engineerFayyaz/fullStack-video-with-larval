import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const Desktop182Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans gap-[31px] items-center justify-start mx-auto p-2 shadow-bs1 w-full">
        <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="md:flex-1 h-20 sm:h-auto object-cover w-[6%] md:w-full"
            src="images/img_whatsappimage.png"
            alt="whatsappimage"
          />
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[528px] md:mt-0 my-[19px] w-[56%] md:w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-[64%] md:w-full">
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
              className="cursor-pointer flex items-center justify-center min-w-[172px]"
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
              <div className="font-bold text-base text-center">
                Jane J. Jester
              </div>
            </Button>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start md:px-5">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100"
            size="txtOpenSansRomanBold32"
          >
            Profile
          </Text>
        </div>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1207px] mx-auto md:px-5 w-full">
          <Img
            className="h-64 md:h-auto rounded-[50%] w-64"
            src="images/img_photo153207420.png"
            alt="photo153207420"
          />
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[258px]">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-100"
              size="txtOpenSansRomanExtraBold50"
            >
              Jane J. Jester
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] mt-[9px] text-gray-100 text-xl"
              size="txtPoppinsRegular20"
            >
              <span className="text-gray-100 font-opensans text-left font-normal">
                Email:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                xyz@gmail.com
              </span>
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] mt-[13px] text-gray-100 text-xl"
              size="txtPoppinsRegular20"
            >
              <span className="text-gray-100 font-opensans text-left font-normal">
                Age:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                23
              </span>
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] mt-2.5 text-gray-100 text-xl"
              size="txtPoppinsRegular20"
            >
              <span className="text-gray-100 font-opensans text-left font-normal">
                Address:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                NIL
              </span>
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] mt-3 text-gray-100 text-xl"
              size="txtPoppinsRegular20"
            >
              <span className="text-gray-100 font-opensans text-left font-normal">
                Phone Number:{" "}
              </span>
              <span className="text-gray-100 font-opensans text-left font-bold">
                +1 123 123 123
              </span>
            </Text>
          </div>
          <Img
            className="h-10 md:ml-[0] ml-[326px] w-[39px]"
            src="images/img_checkmark.svg"
            alt="checkmark"
          />
        </div>
        <List
          className="sm:flex-col flex-row font-inter gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1316px] mb-8 mx-auto md:px-5 w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pl-3 py-3 rounded-[20px] w-full">
            <div className="flex flex-col justify-start my-3 w-full">
              <div className="flex flex-row gap-2 items-center justify-start ml-1 md:ml-[0] w-3/4 md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
                  size="txtInterBold32"
                >
                  Free for All
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-8 w-auto">
                <Text
                  className="text-[22px] text-gray-500 sm:text-lg md:text-xl w-full"
                  size="txtInterRegular22"
                >
                  What You’ll Get
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_One"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Two"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Three"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-500 h-px mr-3 mt-9 w-[96%]" />
              <Text
                className="ml-3 md:ml-[0] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
                size="txtInterBold32"
              >
                FREE
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
                color="purple_A100"
                size="md"
                variant="fill"
              >
                Choose
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pl-3 py-3 rounded-[20px] w-full">
            <div className="flex flex-col justify-start my-3 w-full">
              <div className="flex flex-row gap-2 items-center justify-start ml-1 md:ml-[0] w-[65%] md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
                  size="txtInterBold32"
                >
                  Premium
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-8 w-auto">
                <Text
                  className="text-[22px] text-gray-500 sm:text-lg md:text-xl w-full"
                  size="txtInterRegular22"
                >
                  What You’ll Get
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_One"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Two"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Three"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-500 h-px mr-3 mt-9 w-[96%]" />
              <Text
                className="ml-3 md:ml-[0] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
                size="txtInterBold32"
              >
                <span className="text-gray-900_02 font-inter text-left font-bold">
                  $
                </span>
                <span className="text-gray-900_02 font-inter text-left font-bold">
                  480
                </span>
                <span className="text-gray-900_02 font-inter text-left text-lg font-normal">
                  /month
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
                color="purple_A100"
                size="md"
                variant="fill"
              >
                Choose
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pl-3 py-3 rounded-[20px] w-full">
            <div className="flex flex-col justify-start my-3 w-full">
              <div className="flex flex-row gap-2 items-center justify-start ml-1 md:ml-[0] w-[69%] md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
                  size="txtInterBold32"
                >
                  Individual
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-8 w-auto">
                <Text
                  className="text-[22px] text-gray-500 sm:text-lg md:text-xl w-full"
                  size="txtInterRegular22"
                >
                  What You’ll Get
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_One"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Two"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Three"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-500 h-px mr-3 mt-9 w-[96%]" />
              <Text
                className="ml-3 md:ml-[0] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
                size="txtInterBold32"
              >
                <span className="text-gray-900_02 font-inter text-left font-bold">
                  $
                </span>
                <span className="text-gray-900_02 font-inter text-left font-bold">
                  480
                </span>
                <span className="text-gray-900_02 font-inter text-left text-lg font-normal">
                  /month
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
                color="purple_A100"
                size="md"
                variant="fill"
              >
                Choose
              </Button>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start pl-3 py-3 rounded-[20px] w-full">
            <div className="flex flex-col justify-start my-3 w-full">
              <div className="flex flex-row gap-2 items-center justify-start ml-1 md:ml-[0] w-[46%] md:w-full">
                <Img
                  className="h-10 w-10"
                  src="images/img_lightbulb.svg"
                  alt="lightbulb"
                />
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
                  size="txtInterBold32"
                >
                  Team
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-[31px] w-auto">
                <Text
                  className="text-[22px] text-gray-500 sm:text-lg md:text-xl w-full"
                  size="txtInterRegular22"
                >
                  What You’ll Get
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_One"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Two"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bxscheckcircle.svg"
                    alt="bxscheckcircle_Three"
                  />
                  <Text
                    className="text-gray-900_02 text-lg w-auto"
                    size="txtInterRegular18"
                  >
                    Lorem ipsum dolor sit amet
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-500 h-px mr-3 mt-9 w-[96%]" />
              <Text
                className="ml-3 md:ml-[0] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
                size="txtInterBold32"
              >
                <span className="text-gray-900_02 font-inter text-left font-bold">
                  $
                </span>
                <span className="text-gray-900_02 font-inter text-left font-bold">
                  480
                </span>
                <span className="text-gray-900_02 font-inter text-left text-lg font-normal">
                  /month
                </span>
              </Text>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
                color="purple_A100"
                size="md"
                variant="fill"
              >
                Choose
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

export default Desktop182Page;
