import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text, TextArea } from "components";
import Header1 from "components/Header1";

const Desktop193Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col justify-start mx-auto p-2 w-full">
        <div className="flex flex-col font-opensans items-center max-w-[1370px] mx-auto pl-3 md:px-5 w-full">
          <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
        </div>
        <Text
          className="ml-3 md:ml-[0] mt-10 md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
          size="txtCatamaranRomanBold32"
        >
          Upload a Movie or Show
        </Text>
        <div className="flex flex-col font-nunitosans items-center justify-start mb-[257px] md:ml-[0] ml-[30px] mt-[38px] md:px-5 w-[87%] md:w-full">
          <div className="flex flex-col gap-8 items-end justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="bg-white-A700 flex flex-col h-[150px] items-center justify-start mb-[25px] p-[63px] md:px-10 sm:px-5 rounded-[50%] w-[150px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_antdesigncamerafilled.svg"
                  alt="antdesigncamera"
                />
              </div>
            
              <div className="flex md:flex-1 flex-col gap-8 items-center justify-start md:mt-0 mt-1.5 w-[82%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">

                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtNunitoSansSemiBold14"
                    >
                      Name
                    </Text>
                    <Input
                      name="frameThree"
                      placeholder="Name"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                      wrapClassName="w-full"
                      type="text"
                      shape="round"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtNunitoSansSemiBold14"
                    >
                      Gaming
                    </Text>
                    <Input
                      name="frameThree_One"
                      placeholder="Gaming"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                      wrapClassName="w-full"
                      shape="round"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">

                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtNunitoSansSemiBold14"
                    >
                      Email
                    </Text>
                    <Input
                      name="email_One"
                      placeholder="mail@abc.com"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                      wrapClassName="w-full"
                      type="email"
                      shape="round"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">

                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtNunitoSansSemiBold14"
                    >
                      Location
                    </Text>
                    <Input
                      name="frameThree_Two"
                      placeholder="Location"
                      className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                      wrapClassName="w-full"
                      shape="round"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[82%] md:w-full">
            <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[40%] sm:w-full">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtNunitoSansSemiBold14"
                >
                  Description
                </Text>
                <TextArea
                  className="bg-transparent border border-solid border-white-A700 gap-[13px] h-[309px] leading-[normal] pb-[265px] pt-[13px] px-2.5 rounded-[5px] text-left text-sm placeholder:text-white-A700 text-white-A700 w-[420px]"
                  name="frameThree_Three"
                  placeholder="Description"
            
                  
                ></TextArea>
              </div>
              <div className="flex flex-col md:gap-10 gap-24 items-center justify-start w-[40%] md:w-full">
              <div className="flex sm:flex-1 flex-col gap-1 items-start justify-start w-[100%] sm:w-full">
                  <Text
                    className="text-sm text-white-A700 w-auto"
                    size="txtNunitoSansSemiBold14"
                  >
                    Proof of Ownership
                  </Text>
                  <Input
                    name="frameThree_Four"
                    placeholder="File"
                    className="leading-[normal] p-0 placeholder:text-white-A700 text-left text-sm w-full"
                    wrapClassName="w-full"
                    shape="round"
                  ></Input>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-bold font-catamaran rounded-br-[3px] rounded-tr-[3px] text-base text-center w-[220px]"
                  onClick={() => navigate("/MyChannels")}
                  color="pink_500"
                  size="md"
                  variant="fill"
                >
                  Upload
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop193Page;
