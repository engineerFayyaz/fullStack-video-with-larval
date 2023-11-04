import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CheckBox, Line, Img, Button } from 'components'; // Assuming these components are properly implemented
import { useGoogleLogin } from "@react-oauth/google";
import Header from 'components/Header1'; // Assuming you want to use Header1

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successful. 😍");
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();

    // Define your API endpoint for login
    const apiUrl = 'http://mobile.codegifted.com/api/login';

    // Create a data object with the user's input
    const loginData = {
      email: email,
      password: password,
    };

    // Make a POST request to the login API
    axios
      .post(apiUrl, loginData)
      .then((response) => {
        // Handle the API response here
        console.log('API Response:', response.data);
        if (response.data.status === '1') {
          toast.success('Login successful');
          // Redirect to the dashboard or other page on successful login
          navigate('/' , { state: { email: email } });
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        // Handle errors
        console.error('API Error:', error);
        toast.error('Error during login');
      });
  };

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-end mx-auto p-[18px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1171px] mt-[62px] mx-auto md:px-5 w-full">
          <Img
            className="h-[403px] md:h-auto md:mt-0 mt-[217px] object-cover"
            src="images/img_whatsappimage_403x476.png"
            alt="whatsappimage"
          />
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-row items-center justify-between w-[90%] md:w-full">
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-pink-500 sm:text-xl"
              >
                Login
              </a>
              <a className="text-2xl md:text-[22px] text-white-A700 sm:text-xl">
                Sign Up
              </a>
            </div>
            <Line className="bg-pink-500 h-0.5 mr-[253px] mt-[7px] w-[55%]" />
            <div className="flex flex-col items-start justify-start mr-0.5 mt-[90px] w-[87%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] text-center text-lg"
                onClick={() => googleSignIn()}
                shape="round"
                color="pink_500"
                size="sm"
                variant="fill"
              >
                Login with Google
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] mt-5 text-center text-lg"
                shape="round"
                color="pink_500"
                size="sm"
                variant="fill"
              >
                Login with Facebook
              </Button>
              <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] mt-5 text-center text-lg"
                shape="round"
                color="pink_500"
                size="sm"
                variant="fill"
              >
                Login with Twitter
              </Button>
              <p className="text-2xl md:text-[22px] text-white-A700 sm:text-xl">
                OR
              </p>
              <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-16 w-[99%] md:w-full">
                <p className="text-lg text-white-A700">
                  Email
                </p>
                <input
                  name="email_One"
                  placeholder="Email"
                  className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                  wrapClassName="rounded-[20px] w-full"
                  type="email"
                  color="gray_900_01"
                  variant="fill"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-[19px] w-[99%] md:w-full">
                <p className="text-lg text-white-A700">
                  Password
                </p>
                <input
                  name="password_One"
                  placeholder="Password"
                  className="leading-[normal] p-0 placeholder:text-white-A700_87 text-left text-lg w-full"
                  wrapClassName="rounded-[20px] w-full"
                  type="password"
                  color="gray_900_01"
                  variant="fill"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <CheckBox
                className="leading-[normal] md:ml-[0] ml-[5px] mt-[19px] text-left text-lg"
                inputClassName="border-2 border-pink-500 border-solid h-[25px] mr-[5px] w-[25px]"
                name="rememberme"
                id="rememberme"
                label="Remember me"
              />
              <Button
                className="common-pointer border border-pink-500 border-solid cursor-pointer font-bold leading-[normal] min-w-[225px] md:ml-[0] ml-[118px] mt-[50px] shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
                color="pink_500"
                size="xs"
                variant="fill"
                onClick={handleLogin}
              >
                Login
              </Button>
              <div className="flex sm:flex-col flex-row gap-5 items-start justify-between mt-[78px] w-full">
                <a
                  href="javascript:"
                  className="sm:mt-0 mt-0.5 text-lg text-white-A700_90"
                >
                  Privacy Policy
                </a>
                <a
                  href="javascript:"
                  className="mb-0.5 text-lg text-white-A700_90"
                >
                  Terms and Conditions
                </a>
                <p
                  className="mb-0.5 text-lg text-white-A700_90"
                  onClick={() => navigate("/desktop181")}
                >
                  Disclaimer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
