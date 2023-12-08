import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, SelectBox, Text } from "components";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const priceOptionsList = [
  { label: "Binge Network ($5.99 Monthly)", value: "binge_network" },
  { label: "Another Plan 1 ($X.XX Monthly)", value: "plan_1" },
  { label: "Another Plan 2 ($X.XX Monthly)", value: "plan_2" },
];


function SignUpEmailPage() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    username: "",
    firstName: "",
    lastName: "",
    subscriptionPlan: "",
  });

  const handleSubscriptionPlanChange = (selectedOption) => {
    setUserInfo({
      ...userInfo,
      subscriptionPlan: selectedOption.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const apiUrl = " https://ourbrandtv.com/mobile/public/api/updateprofile";
  
      // Make a POST request to the API with user information
      const response = await axios.post(apiUrl, userInfo);
  
      // Check the response status code and log the response data for debugging
  
      if (response.status === 200) {
        // Redirect to the homepage and pass user information as state
        navigate("/", { state: { userInfo } });
      } else {
        // Handle the error based on the response data
        if (response.data && response.data.message) {
          toast.error(response.data.message); // Show error message
        } else {
          toast.error("Error during registration"); // Show a generic error message
        }
      }
    } catch (error) {
      // Handle errors (e.g., network issues, API errors)
      console.error("API Error:", error);
    }
  };
  
  return (
    <>
      <div className="bg-gray-900_02 flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="bg-black-900 flex flex-col items-center justify-start p-[122px] md:px-5 w-[52%] md:w-full">
          <Img
            className="h-[403px] md:h-auto mb-[201px] mt-44 object-cover w-[95%]"
            src="images/img_whatsappimage_403x476.png"
            alt="whatsappimage" />
        </div>
        <div className="bg-black-900 flex flex-col justify-end mb-[7px] p-[11px] md:px-5 w-[49%] md:w-full">
          <Img
            className="h-[50px] md:ml-[0] ml-[18px] mr-[600px] mt-[18px] w-[50px]"
            src="images/img_arrowleft.svg"
            alt="arrowleft" />
          <div className="flex flex-col items-end justify-start md:ml-[0] ml-[104px] mr-[18px] w-[82%] md:w-full">
            <div className="flex flex-row items-center justify-between w-[78%] md:w-full">
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              >
                <Text size="txtPoppinsRegular24">Login</Text>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 100px 0",
                }}
              >
                <Text
                  className="text-2xl md:text-[22px] text-pink-500 sm:text-xl"
                  size="txtPoppinsBold24WhiteA600"
                >
                  Sign Up
                </Text>
              </div>
            </div>
            <Line className="bg-pink-500 h-0.5 mt-[7px] w-1/3" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "30px 250px 0",
              }}
            >
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsBold24WhiteA600"
              >
                Set up your account
              </Text>
            </div>

            <div className="flex flex-col items-center justify-start mr-[91px] mt-[34px] w-[84%] md:w-full">
              <div className="flex flex-col gap-[9px] items-start justify-start w-[99%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Username
                </Text>
                <input
                  name="groupTwelve"
                  placeholder="Username"
                  className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                  wrapClassName="rounded-[20px] w-full"
                  type="text"
                  color="gray_900_01"
                  variant="fill"
                  value={userInfo.username}
                  onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
                ></input>
                <Text
                  className="md:ml-[0] ml-[30px] text-lg text-white-A700_87"
                  size="txtPoppinsRegular18WhiteA70087"
                >
                  e.g. alexfred619, jasemine.ford.6
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start mt-[17px] w-[99%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  First Name
                </Text>
                <input
                  name="groupThirteen"
                  placeholder="First Name"
                  className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                  wrapClassName="rounded-[20px] w-full"
                  type="text"
                  color="gray_900_01"
                  variant="fill"
                  value={userInfo.firstName}
                  onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                ></input>
              </div>
              <div className="md:h-[106px] h-[86px] mt-5 relative w-[99%] sm:w-full">

                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Last Name
                </Text>
                <div className="absolute flex flex-col gap-[9px] h-full inset-[0] items-start justify-center m-auto w-full">

                  <input
                    name="groupFifteen"
                    placeholder="Last Name"
                    className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                    wrapClassName="rounded-[20px] w-full"
                    type="text"
                    color="gray_900_01"
                    variant="fill"
                    value={userInfo.lastName}
                    onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.value })}
                  ></input>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-[21px] w-[99%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Subscription
                </Text>
                <div className="bg-gray-900_01 flex flex-col items-center justify-start p-[11px] rounded-[20px] w-full">
                  <Text
                    className="text-lg text-white-A700_87"
                    size="txtPoppinsRegular18WhiteA70087"
                  >
                    <>
                      Please choose your Plan and continue to next
                      <br />
                      step where you can enter your payment
                      <br /> information
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-[21px] w-[99%] md:w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Subscription Plan
                </Text>
                <SelectBox
                  className="border border-pink-500 border-solid font-bold leading-[normal] text-left text-lg w-full"
                  placeholderClassName="text-white-A700"
                  indicator={<Img
                    className="h-1.5 mr-[0] w-3 rounded-lg py-3 px-[9px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down" />}
                    isMulti={false}
        name="subscriptionPlan"
        options={priceOptionsList}
        isSearchable={false}
        value={priceOptionsList.find(
          (option) => option.value === userInfo.subscriptionPlan
        )}
        onChange={handleSubscriptionPlanChange}
        shape="round"
        color="pink_500"
        size="xs"
        variant="fill"
                   />
              </div>
              <Button
                className="common-pointer border border-pink-500 border-solid cursor-pointer leading-[normal] min-w-[225px] mt-8 shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
                // onClick={() => navigate("/")}
                onClick={handleSubmit}
                shape="round"
                color="pink_500"
                size="xs"
                variant="fill"
              >
                Sign Up
              </Button>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-between mt-[78px] w-full">
                <a
                  href="javascript:"
                  className="sm:mt-0 mt-0.5 text-lg text-white-A700_90"
                >
                  <Text
                    size="txtPoppinsRegular18WhiteA70090"
                    onClick={() => navigate("/PrivacyPolicy")}
                  >
                    Privacy Policy
                  </Text>
                </a>
                <a
                  href="javascript:"
                  className="mb-0.5 text-lg text-white-A700_90"
                >
                  <Text
                    size="txtPoppinsRegular18WhiteA70090"
                    onClick={() => navigate("/TermsConditions")}
                  >
                    Terms and Conditions
                  </Text>
                </a>
                <Text
                  className="mb-0.5 text-lg text-white-A700_90"
                  size="txtPoppinsRegular18WhiteA70090"
                  onClick={() => navigate("/Disclaimer")}
                >
                  Disclaimer
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpEmailPage;
