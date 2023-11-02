import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";

const Desktop191Page = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-opensans items-center justify-start mx-auto py-2 shadow-bs1 w-full">
        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <Img
          className="h-[514px] sm:h-auto mt-3 object-cover w-full"
          src="images/img_lucifers1_2.png"
          alt="lucifersOne"
        />
        <div className="flex flex-col justify-start max-w-[1432px] mb-[29px] mt-8 mx-auto overflow-auto md:px-5 w-full">
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
                <Img
                  className="h-40 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_160x283.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_2.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_3.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_4.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <Img
                  className="h-40 md:h-auto object-cover w-full"
                  src="images/img_faj2uifuuaul6u_5.png"
                  alt="faj2uifuuaul6u"
                />
              </div>
            </List>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[17px] mt-8 w-full">
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
            All Shows
          </Text>
          <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[17px] w-full">
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

export default Desktop191Page;
