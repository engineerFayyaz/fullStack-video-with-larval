import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Img, Text , Line } from 'components';
import { useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');
  const password = searchParams.get('password');


  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-end justify-end mx-auto p-[18px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1270px] mt-[11px] mx-auto md:px-5 w-full">
          <Img
            className="h-[403px] md:h-auto object-cover"
            src="images/img_whatsappimage_403x476.png"
            alt="whatsappimage"
          />
          <div className="flex flex-col justify-start">
            <Img
              className="h-[50px] w-[50px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[122px] w-[66%] md:w-full">
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              >
                <Text size="txtPoppinsRegular24">Login</Text>
              </a>
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-pink-500 sm:text-xl"
              >
                <Text size="txtPoppinsBold24">Sign Up</Text>
              </a>
            </div>
            <Line className="bg-pink-500 h-0.5 md:ml-[0] ml-[362px] mr-2.5 mt-[7px] w-[43%]" />
            <Text
              className="md:ml-[0] ml-[222px] mt-[170px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtPoppinsBold24WhiteA700"
            >
              Verifying Email
            </Text>
            <Text
              className="md:ml-[0] ml-[22px] mt-[98px] text-lg text-white-A700"
              size="txtPoppinsRegular18"
            >
              <span className="text-white-A700 font-poppins text-left font-normal">
                A verification email has been sent,
              </span>
              <span className="text-pink-500 font-poppins text-left font-bold">
              {email}
              </span>
              <span className="text-white-A700 font-poppins text-left font-normal">
                <>
                  . Please click
                  <br />
                  on the verification link in the email.{" "}
                </>
              </span>
            </Text>
            <Button
              className="common-pointer border border-pink-500 border-solid cursor-pointer font-bold leading-[normal] min-w-[225px] md:ml-[0] ml-[200px] mr-[217px] mt-[100px] shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
              onClick={() => navigate("/signupemail")}
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
                  <Text size="txtPoppinsRegular18WhiteA70090"
                  onClick={() => navigate("/PrivacyPolicy")}
                  >
                    Privacy Policy
                  </Text>
                </a>
                <a
                  href="javascript:"
                  className="mb-0.5 text-lg text-white-A700_90"
                >
                  <Text size="txtPoppinsRegular18WhiteA70090"
                
                  onClick={() => navigate("/TermsConditions")}>
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
    </>
  );
};

export default SignUpPage;
