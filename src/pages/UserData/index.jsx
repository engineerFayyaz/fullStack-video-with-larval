import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Img } from "components"; // Assuming this component is properly implemented
import { useNavigate } from "react-router-dom";
import Header1 from "components/Header1";
import axios from "axios"; // Import axios for making HTTP requests

const DeleteUserData = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleDeleteRequest = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error("Please enter your email and password.");
      return;
    }

    // Show confirmation message
    if (window.confirm("Are you sure you want to delete your data?")) {
      try {
        const response = await axios.post(
          "https://ourbrandtv.com/mobile/public/api/RemoveUser",
          {
            email: email,
            password: password
          }
        );
      
        // Check if the request was successful
        if (response.data.success) {
          toast.success("Data deletion request submitted successfully.");
          navigate("/login");
        } else {
          toast.success("Data deletion request submitted successfully.");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error deleting user data:", error.response.data);
        toast.error("Failed to delete user data. Please try again later.");
      }
      
    }
  };

  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins items-center justify-end mx-auto p-[18px] w-full">
        <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full"/>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1171px] mt-[62px] mx-auto md:px-5 w-full">
          {/* First Container */}
          <div className="w-1/2 flex justify-center items-center">
            <Img
              src="images/logo.png" // Replace with the path to your logo image
              alt="Logo"
              className="md:h-auto md:mt-0 mt-[40px] object-cover"
            />
          </div>
          {/* Second Container */}
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-center justify-start w-[80%] mt-5">
              <p lassName="text-white-A700 text-lg mb-3" style={{color:"white"}}>
              Ensure data privacy: Regularly delete unnecessary data to maintain security. Keep your records streamlined and safe with OurBrand TV. Simplify your data management for a safer digital environment.
              </p>
              <p className="text-white-A700 text-lg mb-3 mt-10">
                Request Data Deletion
              </p>
              <form className="flex flex-col w-full max-w-[450px]">
                <input
                  name="email"
                  placeholder="Enter your email"
                  className="leading-[normal] p-2 placeholder:text-white-A700_87 text-white-A700 text-lg w-full mb-4 rounded-[20px] bg-[#1D1D1D] border-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  name="password"
                  placeholder="Enter your password"
                  className="leading-[normal] p-2 placeholder:text-white-A700_87 text-white-A700 text-lg w-full mb-4 rounded-[20px] bg-[#1D1D1D] border-none"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  className="common-pointer font-bold leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-full"
                  shape="round"
                  color="pink_500"
                  size="xs"
                  variant="fill"
                  onClick={handleDeleteRequest}
                >
                  Request Deletion
                </Button>
              </form>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="text-white-A700 text-center py-4">
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
        </footer>
      </div>
    </>
  );
};

export default DeleteUserData;
