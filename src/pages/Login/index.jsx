import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { CheckBox, Line, Img, Button } from "components"; // Assuming these components are properly implemented
import { auth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from '../../FirebaseConfig'; // Adjust the path as needed
import { useUser } from "../../redux/UserContext";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const { setEmail: setUserEmail } = useUser();
  const [filesDownloaded, setFilesDownloaded] = useState(false); // State to track whether files have been downloaded
  const { setUserEmail } = useUser();

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  useEffect(() => {
    // Check if files have been downloaded for the current user
    const hasDownloadedFiles = localStorage.getItem("filesDownloaded");
    if (hasDownloadedFiles) {
      setFilesDownloaded(true);
    }
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const userEmail = user.email;

      toast.success(`Login successful. Welcome, ${user.displayName}! 😍`, {
        position: toast.POSITION.TOP_CENTER,
      });

      localStorage.setItem("loggedInEmail", userEmail);
      setUserEmail(userEmail); // Set the email in the context
      navigate("/", { state: { email: userEmail } });
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      toast.error("An error occurred during Google Sign-In. Please try again.");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      const userEmail = user.email;

      toast.success(`Login successful. Welcome, ${user.displayName}! 😍`, {
        position: toast.POSITION.TOP_CENTER,
      });

      localStorage.setItem("loggedInEmail", userEmail);
      setUserEmail(userEmail); // Set the email in the context
      navigate("/", { state: { email: userEmail } });
    } catch (error) {
      console.error("Error during Facebook Sign-In:", error);
      toast.error("An error occurred during Facebook Sign-In. Please try again.");
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

          setUserEmail(email); // Set the email in the context
          navigate("/", { state: { email: email } });

          // Trigger file downloads only if they haven't been downloaded before
          if (!filesDownloaded) {
            // Set the flag indicating files have been downloaded for the current user
            localStorage.setItem("filesDownloaded", true);

            // Simulate a delay for the file downloads
            toast.info("Downloading files, please wait...");
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
          }
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
                onClick={handleGoogleLogin}
              >
                Login with Google
              </Button>

              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] text-center text-lg text-white-700 rounded-[3px] p-[11px] bg-blue-600 text-white-A700 "
                shape="round"
                size="sm"
                variant="fill"
                onClick={handleFacebookLogin}
              >
                Log in with Facebook
              </Button>
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
                    background: "#1C1C1C",
                    border: "1px solid #666",
                    color: "#fff",
                  }}
                ></input>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start mt-7 md:ml-[0] ml-[5px] w-full min-w-[450px] sm:min-w-full">
                <p className="text-lg text-white-A700">Password</p>
                <input
                  name="password"
                  placeholder="Password"
                  className="leading-[normal] text-lg p-2 placeholder:text-white-A700_87 text-white-A700 text-left w-full"
                  wrapClassName="rounded-[20px] w-full"
                  type="password"
                  variant="fill"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    background: "#1C1C1C",
                    border: "1px solid #666",
                    color: "#fff",
                  }}
                ></input>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[5px] mt-7 w-full min-w-[450px] sm:min-w-full">
                <CheckBox
                  id="acceptTerms"
                  name="remember"
                  label="By clicking here, you agree to Our Terms and Conditions."
                  inputClassName="h-5 mr-[5px] w-5"
                  className="leading-[normal] text-lg text-white-A700"
                  shape="rounded"
                  variant="outline_white_a700"
                />
                <a
                  href="javascript:"
                  className="text-blue-600 text-left text-lg"
                >
                  Forgot Password?
                </a>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[450px] sm:min-w-full md:ml-[0] ml-[5px] text-center text-lg text-white-700 rounded-[3px] p-[11px] bg-blue-600 text-white-A700"
                shape="round"
                color="pink_500"
                size="sm"
                variant="fill"
                onClick={handleLogin}
              >
                Log In
              </Button>
              <p className="text-lg md:ml-[0] ml-[5px] mt-7 text-white-A700">
                Not a member yet?{" "}
                <a
                  href="javascript:"
                  className="text-blue-600 text-lg"
                  onClick={() => navigate("/SignUpOne")}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;