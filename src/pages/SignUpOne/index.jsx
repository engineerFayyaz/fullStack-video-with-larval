import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { Button, CheckBox, Img, Input, Line, Text } from "components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FacebookLogin from 'react-facebook-login';
function SignUpOnePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  // Add other state variables for additional fields if needed
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      // Access the user's email from the response
      const userEmail = res.profileObj.email;
      console.log("Google Login Response:", res);
      console.log("User Email:", userEmail);
      alert("Login successful with Google. 😍");
      // Now, you can use userEmail as needed (e.g., send it to your server)
      // ...

      navigate("/");
    },
  });



  const responseFacebook = (response) => {
    if (response.status !== 'unknown') {
      console.log("Facebook Login Response:", response);
      alert("Sign up with Facebook successful. 😍");
    } else {
      console.log("Facebook Login was cancelled or failed.");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Define your API endpoint
    const apiUrl = "http://mobile.codegifted.com/api/signup";

    // Create a data object with the user's input
    const userData = {
      email: email,
      password: password,
      // Add other fields as needed
    };

    // Make a POST request to the API
    axios
      .post(apiUrl, userData)
      .then((response) => {
        // Handle the API response here
        console.log("API Response:", response.data);
        toast.success(response.data.message);
        // navigate(`/signup?email=${email}&password=${password}`);
        navigate("/login");
      })
      .catch((error) => {
        // Handle errors
        console.error("API Error:", error);
        toast.error("Error during registration"); // Show error toast
      });
  };

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-end justify-end mx-auto p-[18px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1171px] mt-[62px] mx-auto md:px-5 w-full">
          <Img
            className=" md:h-auto md:mt-0 mt-[40px] object-cover"
            src="images/logo.png"
            alt="whatsappimage"
          />
          <div className="flex flex-col items-end justify-start">
            <div className="flex flex-row justify-between w-[100%] md:w-full">
              <a className="text-2xl md:text-[22px] text-white-A700 sm:text-xl">
                <Text
                  className="common-pointer"
                  size="txtPoppinsRegular24"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Text>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 70px 0",
                }}
              >
                <Text
                  className="text-2xl md:text-[22px] text-blue-600 sm:text-xl"
                  size="txtPoppinsBold24WhiteA600"
                >
                  Sign Up
                </Text>
              </div>
            </div>
            <Line className="bg-blue-600 h-0.5 mt-[7px] w-1/2" />
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
              <FacebookLogin
                appId="1514730115943733"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] text-center text-lg text-white-700"
                render={(renderProps) => (
                  <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] text-center text-lg text-white-700 rounded-[3px] p-[11px] bg-blue-600 text-white-A700 "
                shape="round"
                color="pink_500"
                size="sm"
                variant="fill"
                onClick={renderProps.onClick}
              >
                Sign up with Facebook
              </Button>
                )}
              />
              {/* <Button
                className="cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] mt-5 text-center text-lg"
                shape="round"
                color="pink_500"
                size="sm"
                variant="fill"
              >
                Sign up with Twitter
              </Button> */}
              <Text
                className="md:ml-[0] ml-[213px] mt-[18px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtPoppinsBold24WhiteA700"
              >
                OR
              </Text>
              <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px]  w-[100%] md:w-full min-w-[450px] sm:min-w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Email
                </Text>
                <input
                  name="email_One"
                  placeholder="Email"
                  className="leading-[normal]  p-2 placeholder:text-white-A700_87 text-left text-lg w-full text-white-A700"
                  wrapClassName="rounded-[20px] w-full"
                  type="email"
                  variant="fill"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{background:"#1D1D1D",border:"none",borderRadius:"6px"}}
                ></input>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px]  w-[100%] md:w-full min-w-[450px] sm:min-w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Password
                </Text>
                <input
                  name="groupSeven"
                  placeholder="Password"
                  className="leading-[normal]  p-2 placeholder:text-white-A700_87 text-left text-lg w-full text-white-A700"
                  wrapClassName="rounded-[20px] w-full"
                  type="password"
                  variant="fill"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{background:"#1D1D1D",border:"none",borderRadius:"6px"}}
                ></input>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px]  w-[100%] md:w-full min-w-[450px] sm:min-w-full">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsRegular18"
                >
                  Confirm Password
                </Text>
                <input
                  name="groupEight"
                  placeholder="Confirm Password"
                  className="leading-[normal]  p-2 placeholder:text-white-A700_87 text-left text-lg w-full text-white-A700"
                  wrapClassName="rounded-[20px] w-full"
                  type="password"
                  variant="fill"
                  value={Confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{background:"#1D1D1D",border:"none",borderRadius:"6px"}}
                ></input>
              </div>
              <CheckBox
                className="leading-[normal] md:ml-[0] ml-[5px] mt-[19px] text-left text-lg w-[400px]"
                inputClassName="border-2 border-blue-600 border-solid h-[25px] mr-[5px] w-[25px]"
                name="rememberme"
                id="rememberme"
                label={<span style={{color:"white"}}>I accept the “Terms and Conditions”. </span>}
              />
              <Button
                className="common-pointer border border-blue-600 border-solid cursor-pointer font-bold leading-[normal] min-w-[225px] md:ml-[0] ml-[118px] mt-12 shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
                onClick={handleSubmit}
                shape="round"
                color="pink_500"
                size="xs"
                variant="fill"
              >
                Sign Up
              </Button>
              <div className="flex sm:flex-col flex-row gap-2 items-start justify-between mt-[18px] w-full min-w-[450px] sm:min-w-full">
                <a
                  href="javascript:"
                  className="sm:mt-0 mt-0.5 text-md text-white-A700_90"
                >
                  Privacy Policy
                </a>
                <a
                  href="javascript:"
                  className="mb-0.5 text-md text-white-A700_90"
                >
                  Terms and Conditions
                </a>
                <p
                  className="mb-0.5 text-md text-white-A700_90"
                  onClick={() => navigate("/Disclaimer")}
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
}

export default SignUpOnePage;
