import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { CheckBox, Line, Img, Button } from "components"; // Assuming these components are properly implemented
import Header from "components/Header1"; // Assuming you want to use Header1
import { useUser } from "redux/UserContext";
import FacebookLogin from "react-facebook-login";
import { useGoogleLogin } from "@react-oauth/google";

import {
  signInWithPopup,
  auth,
  googleProvider,
  facebookProvider,
} from "../../services/Firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { userEmail, setUserData } = useUser();
  const [googleUser, setGoogleUser] = useState(null);
  const [loggedInEmail, setLoggedInEmail] = useState(null);

  // const [userData, setUserData] = useState({});

  const googleSignIn = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        console.log("Google Sign-In Response:", res); 
        setGoogleUser(res);
        console.log("Google User",googleUser); 
        // Extract the user's email from the response 
  
        let userEmail = "";
  
        // Try extracting email from different possible places in the response
        if (res.profileObj?.email) {
          userEmail = res.profileObj.email;
          console.log("userEmail",userEmail)
        } else if (res.email) {
          userEmail = res.email;
        } else if (res.dt?.email) {
          userEmail = res.dt.email;
        } else if (res.accessToken) {
          // Fetch user information using the Google API
          const userInfoResponse = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${res.accessToken}`);
          const userInfo = await userInfoResponse.json();
  
          userEmail = userInfo.email;
        }
  
        const userName = res.profileObj?.name || "";
  
        if (userEmail) {
          // Use the user's email directly
          toast.success(`Login successful. Welcome, ${userName}! 😍`, {
            position: toast.POSITION.TOP_CENTER,
          });
  
          // Store the logged-in email in local storage
          localStorage.setItem("loggedInEmail", userEmail);

        
  
          // Redirect to the homepage with user email in state
          navigate("/", { state: { email: userEmail } });
        } else {
          // console.error("Unable to extract user email from Google Sign-In response");
           toast.success("Google Data is saved ");
          navigate("/");
        }
      } catch (error) {
        console.error("Error during Google Sign-In:", error);
        toast.error("An error occurred during Google Sign-In. Please try again.");
      }
    },
    onFailure: (err) => {
      console.error("Google Login Failed:", err);
      toast.error("Google Login Failed. Please try again.");
  
      // Log more details about the error
      if (err && err.error) {
        console.error("Google Sign-In Error Details:", err.error);
      }
  
      // Log the entire error object
      console.error("Google Sign-In Full Error:", err);
    },
  });
  

  const handleGoogleSignIn = useCallback(() => {
    googleSignIn();
  }, [googleSignIn]);

  

  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      navigate("/", { state: { email: response.email } });
    } else {
      toast.info("Facebook Login was cancelled or failed.");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the terms and conditions checkbox is checked
    const termsCheckbox = document.getElementById("acceptTerms");
    if (!termsCheckbox.checked) {
      toast.error("Please accept the Terms and Conditions first.");
      return;
    }

    const apiUrl = "https://ourbrandtv.com/mobile/public/api/login";

    const loginData = {
      email: email,
      password: password,
    };

    axios
      .post(apiUrl, loginData)
      .then((response) => {
        if (response.data.status === "1") {
          toast.success("Login successful");

          setUserData({ user_id: response.data.user_id, userEmail: email });
          navigate("/", { state: { email: email } });

          // Trigger file downloads
          toast.info("Downloading files, please wait...");

          // Simulate a delay for the file downloads
          setTimeout(() => {
            toast.success(
              "Files downloaded successfully! Please check the downloaded files."
            );

            // Provide links to the files
            const filesToDownload = [
              "/Files/community_guidelines.docx",
              "/Files/MediaAgreementOBTVjotform.docx",
              "/Files/Obtvpaidagreement (1).docx",
              "/Files/Submitting_Content.docx",
              "/Files/trademark.docx",
            ];

            // Download each file
            filesToDownload.forEach((file) => {
              const link = document.createElement("a");
              link.href = file;
              link.download = file.split("/").pop();
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            });

            // Open the Terms page in a new window
            const termsWindow = window.open("/Terms", "_blank");

            // Close the new window after 20 seconds
            setTimeout(() => {
              if (termsWindow) {
                termsWindow.close();
              }
            }, 20000); // 20 seconds
          }, 2000); // Adjust the delay as needed
        } else {
          toast.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error("API Error:", error);
        toast.error("Error during login");
      });
  };

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-end mx-auto p-[18px] w-full">
        <div className="flex md:flex-col  flex-row md:gap-10 items-start justify-between max-w-[1171px] mt-[62px] mx-auto md:px-5 w-full">
          <Img
            className=" md:h-auto md:mt-0 mt-[40px] object-cover"
            src="images/logo.png"
            alt="whatsappimage"
          />
          <div className="flex flex-col   items-center justify-start w-[40%]">
            <div className="flex flex-row justify-between w-[100%] md:w-full">
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-blue-600 sm:text-xl"
              >
                Login
              </a>
              <a
                href="javascript:"
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                onClick={() => navigate("/SignUpOne")}
              >
                Sign Up
              </a>
            </div>
            <Line className="bg-blue-600 h-0.5 mr-[253px] mt-[7px] w-[55%]" />
            <div className="flex flex-col items-start justify-start mr-0.5 mt-[50px] w-[87%] md:w-full">
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] text-center text-lg text-white-700 rounded-[3px] p-[11px] bg-blue-600 text-white-A700"
                shape="round"
                color="pink_500"
                size="sm"
                variant="fill"
                onClick={() => googleSignIn()}
              >
                Login with Google
              </Button>

              <FacebookLogin
                appId="1514730115943733"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                style={{ backgroundColor: "#2563EB" }}
                render={(renderProps) => (
                  <Button
                    className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] text-center text-lg text-white-700 rounded-[3px] p-[11px] bg-blue-600 text-white-A700 "
                    shape="round"
                    // color="pink_500"
                    size="sm"
                    variant="fill"
                    onClick={renderProps.onClick}
                  >
                    Log in with Facebook
                  </Button>
                )}
              />
            </div>
            <div className="flex flex-col items-start justify-start mr-0.5 mt-[50px] w-[87%] md:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px]  w-[100%] md:w-full min-w-[450px] sm:min-w-full">
                <p className="text-lg text-white-A700">Email</p>
                <input
                  name="email_One"
                  placeholder="Email"
                  className="leading-[normal]  p-2 placeholder:text-white-A700_87 text-white-A700 text-left text-lg w-full"
                  wrapClassName="rounded-[20px] w-full"
                  type="email"
                  variant="fill"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    background: "#1D1D1D",
                    border: "none",
                    borderRadius: "6px",
                  }}
                />
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] mt-[19px] w-[100%] md:w-full min-w-[450px] sm:min-w-full">
                <p className="text-lg text-white-A700">Password</p>
                <input
                  name="password_One"
                  placeholder="Password"
                  className="leading-[normal]  p-2 placeholder:text-white-A700_87 text-left text-lg w-full text-white-A700"
                  wrapClassName="rounded-[20px] w-full"
                  type="password"
                  variant="fill"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    background: "#1D1D1D",
                    border: "none",
                    borderRadius: "6px",
                  }}
                />
                <a
                  href="javascript:"
                  onClick={() => navigate("/forgot-password")} // Navigate to the Forgot Password page
                  className="text-md text-white-A700_90"
                >
                  Forgot Password
                </a>
              </div>
              <CheckBox
                className="leading-[normal] md:ml-[0] ml-[5px] mt-[19px] text-left text-lg"
                inputClassName="border-2 border-blue-600 border-solid h-[25px] mr-[5px] w-[25px]"
                name="rememberme"
                id="rememberme"
                label={<span style={{ color: "white" }}>Remember me</span>}
              />

              <CheckBox
                id="acceptTerms" // Ensure this line is present with the correct ID
                className="leading-[normal] md:ml-[0] ml-[5px] mt-[19px] text-left text-lg"
                inputClassName="border-2 border-blue-600 border-solid h-[25px] mr-[5px] w-[25px]"
                name="acceptTerms"
                label={
                  <span style={{ color: "white" }}>
                    Accept Terms and Conditions
                  </span>
                }
              />
              <Button
                className="common-pointer border border-blue-700 border-solid cursor-pointer font-bold leading-[normal] min-w-[225px] md:ml-[0] ml-[118px] mt-[50px] shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
                shape="round"
                color="pink_500"
                size="xs"
                variant="fill"
                onClick={handleLogin}
              >
                Login
              </Button>
              <div className="flex sm:flex-col flex-row gap-2 items-start justify-between mt-[18px] w-full min-w-[450px] sm:min-w-full">
                <a
                  href="javascript:"
                  className="sm:mt-0 mt-0.5 text-md text-white-A700_90"
                  onClick={() => navigate("/PrivacyPolicy")}
                >
                  Privacy Policy
                </a>
                <a
                  href="javascript:"
                  className="mb-0.5 text-md text-white-A700_90"
                  onClick={() => navigate("/TermsConditions")}
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
};

export default LoginPage;
