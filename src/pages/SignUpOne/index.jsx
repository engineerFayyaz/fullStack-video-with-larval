import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { Button, CheckBox, Img, Input, Line, Text } from "components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUpOnePage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Confirmpassword, setConfirmPassword] = useState('');
  // Add other state variables for additional fields if needed
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
     
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    // Define your API endpoint
    const apiUrl = 'http://mobile.codegifted.com/api/signup';

    // Create a data object with the user's input
    const userData = {
      email: email,
      password: password,
      // Add other fields as needed
    };

    // Make a POST request to the API
    axios.post(apiUrl, userData)
      .then((response) => {
        // Handle the API response here
        console.log('API Response:', response.data);
        toast.success(response.data.message); 
        // navigate(`/signup?email=${email}&password=${password}`);
        navigate('/login')
      })
      .catch((error) => {
        // Handle errors
        console.error('API Error:', error);
        toast.error('Error during registration'); // Show error toast

      });
  }

  return (
    <>
    <div className="bg-black-900 flex flex-col font-poppins items-end justify-end mx-auto p-[18px] w-full">
      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1260px] mt-[62px] mx-auto md:px-5 w-full">
        <Img
          className="h-[403px] md:h-auto md:mt-0 mt-[217px] object-cover"
          src="images/img_whatsappimage_403x476.png"
          alt="whatsappimage"
        />
        <div className="flex flex-col items-end justify-start">
          <div className="flex flex-row items-center justify-between w-[84%] md:w-full">
            <a className="text-2xl md:text-[22px] text-white-A700 sm:text-xl">
              <Text
                className="common-pointer"
                size="txtPoppinsRegular24"
                onClick={() => navigate("/login")}
              >
                Login
              </Text>
            </a>

            <div style={{ display: 'flex', alignItems: 'center', padding: '0px 70px 0' }}>
<Text
  className="text-2xl md:text-[22px] text-pink-500 sm:text-xl"
  size="txtPoppinsBold24WhiteA600"
>
  Sign Up
</Text>
</div>

           

          </div>
          <Line className="bg-pink-500 h-0.5 mt-[7px] w-1/2" />
          <div className="flex flex-col items-start justify-start mr-[91px] mt-12 w-[65%] md:w-full">
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] text-center text-lg"
              onClick={() => googleSignIn()}
              shape="round"
              color="pink_500"
              size="sm"
              variant="fill"
            >
              Sign up with Google
            </Button>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] mt-5 text-center text-lg"
              shape="round"
              color="pink_500"
              size="sm"
              variant="fill"
            >
              Sign up with Facebook
            </Button>
            <Button
              className="cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] mt-5 text-center text-lg"
              shape="round"
              color="pink_500"
              size="sm"
              variant="fill"
            >
              Sign up with Twitter
            </Button>
            <Text
              className="md:ml-[0] ml-[213px] mt-[49px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtPoppinsBold24WhiteA700"
            >
              OR
            </Text>
            <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-5 w-[99%] md:w-full">
              <Text
                className="text-lg text-white-A700"
                size="txtPoppinsRegular18"
              >
                Email
              </Text>
              <input
                name="groupSix"
                placeholder="Email"
                className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                wrapClassName="rounded-[20px] w-full"
                type="email"
                color="gray_900_01"
                variant="fill"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-[19px] w-[99%] md:w-full">
              <Text
                className="text-lg text-white-A700"
                size="txtPoppinsRegular18"
              >
                Password
              </Text>
              <input
                name="groupSeven"
                placeholder="Password"
                className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                wrapClassName="rounded-[20px] w-full"
                type="password"
                color="gray_900_01"
                variant="fill"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-[19px] w-[99%] md:w-full">
              <Text
                className="text-lg text-white-A700"
                size="txtPoppinsRegular18"
              >
                Confirm Password
              </Text>
              <input
                name="groupEight"
                placeholder="Confirm Password"
                className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                wrapClassName="rounded-[20px] w-full"
                type="password"
                color="gray_900_01"
                variant="fill"
                value={Confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <CheckBox
              className="leading-[normal] md:ml-[0] ml-[5px] mt-[21px] text-left text-lg"
              inputClassName="border-2 border-pink-500 border-solid h-[25px] mr-[5px] w-[25px]"
              name="iaccepttheterms_One"
              id="iaccepttheterms_One"
              label="I accept the “Terms and Conditions”. "
              size="xs"
            ></CheckBox>
            <Button
              className="common-pointer border border-pink-500 border-solid cursor-pointer font-bold leading-[normal] min-w-[225px] md:ml-[0] ml-[118px] mt-12 shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
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
                <Text size="txtPoppinsRegular18WhiteA70090"
                onClick={() => navigate("/desktop180")}
                >
                  Privacy Policy
                </Text>
              </a>
              <a
                href="javascript:"
                className="mb-0.5 text-lg text-white-A700_90"
              >
                <Text size="txtPoppinsRegular18WhiteA70090"
              
                onClick={() => navigate("/desktop179")}>
                  Terms and Conditions
                </Text>
              </a>
              <Text
                className="mb-0.5 text-lg text-white-A700_90"
                size="txtPoppinsRegular18WhiteA70090"
                onClick={() => navigate("/desktop181")}
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

export default SignUpOnePage;
