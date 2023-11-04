import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, PagerIndicator, Text } from "components";
import ChannelBanner from "components/ChannelBanner";

const Channels = () => {
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
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_television_pink_500.svg"
                  alt="television"
                />
                <Text
                  className="text-base text-pink-500 w-auto"
                  size="txtOpenSansRomanBold16"
                >
                  Channels
                </Text>
              </div>
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
          {/* <Img
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
          /> */}
          {/* <div className="absolute bottom-[22%] flex flex-col items-start justify-start left-[2%] w-1/5">
            <Text
              className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-100"
              size="txtPoppinsBlack50"
            >
              BBC
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
          </div> */}
          <ChannelBanner/>
        </div>
        <div className="flex flex-col font-opensans justify-start max-w-[1432px] mb-[29px] mt-8 mx-auto overflow-auto md:px-5 w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <div className="flex flex-row gap-1 items-center justify-start ml-1 md:ml-[0] w-auto">
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
            <List
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/9Auq9mYxFEE"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/GHZvOIQgwFY"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/vZYMwAm8sso"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/Bgqq9gpuDnc"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/3ni9YJHkKHw"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
            </List>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] mt-8 w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
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
              className="sm:flex-col flex-row gap-4 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/jfKfPfyJRdk"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/zsYwejVYZ_M"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/qH3fETPsqXU"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/rUxyKA_-grg"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
              <iframe
                  width="100%"
                  height="160rem"
                  src="https://www.youtube.com/embed/3ni9YJHkKHw"
                  frameBorder="0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                ></iframe>
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
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/ydYDqZQpim8"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/RBikkVw4maE"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/lFPG2B7hJs0"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/MIA8AKVZ0Yk"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/-QpxsY5anoc"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/Vm2SwtQVTLY"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/3ni9YJHkKHw"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/d-Prr4NkPmk"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/-OMckPM0Gao"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/36YnV9STBqc"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/4zpDEDyF9dc"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/86XzuPmMriw"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/VSZg7mjOd84"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/tkDUSYHoKxE"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/Fgm9UAzdzQY"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/34H1XIjnfKM"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/tyVQk-BAWms"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/TG4fFNVoEQQ"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/we2YjI3IzPk"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
            <iframe
                  width="100%"
                  height="193rem"
                  src="https://www.youtube.com/embed/yI3H8Dnrn9M"
                  allow="autoplay; fullscreen; encrypted-media"
                  title="YouTube Video"
                />
            </div>
            
          </div>
          <div className="flex sm:flex-col flex-row gap-8 items-start justify-start md:ml-[0] ml-[54px] w-[38%] md:w-full">
            <a href="javascript:" className="text-base text-white-A700">
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/desktop180")}
              >
                Privacy Policy
              </Text>
            </a>
            <Text
              className="text-base text-white-A700"
              size="txtOpenSansRomanRegular16"
              onClick={() => navigate("/desktop181")}
            >
              Disclaimer
            </Text>
            <a href="javascript:" className="text-base text-white-A700">
              <Text
                size="txtOpenSansRomanRegular16"
                onClick={() => navigate("/desktop179")}
              >
                Terms and Conditions
              </Text>
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

export default Channels;
