import React, { useState } from 'react';
import { Img, Button } from 'components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // Added confirmPassword state
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const navigate = useNavigate();

  const handleUpdatePassword = async () => {
    try {
      if (!isCodeVerified) {
        console.error('Verification Code is not verified.');
        return;
      }

      if (newPassword !== confirmPassword) {
        toast.error('Passwords do not match. Please try again.');
        return;
      }

      // Define your API endpoint for updating the password
      const apiUrl = ' https://ourbrandtv.com/mobile/public/api/updatepassword';

      // Replace 'userId' with the actual user ID
      const userId = '123'; // Replace with the user's ID

      // Send a request to the API for password update
      const response = await axios.post(apiUrl, {
        id: userId,
        password: newPassword,
        verification_code: verificationCode,
      });

      if (response.data.status === '1') {
        toast.success('Password updated successfully');
        navigate('/login');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error updating password:', error);
      toast.error('Error updating password');

      if (error.response) {
        // Log the response data to get more details
        console.error('Validation Errors:', error.response.data);
      }
    }
  };

  const handleVerifyCode = () => {
    // Here, you can add logic to verify the code sent to the user's email
    // After code verification, set isCodeVerified to true
    setIsCodeVerified(true);
  };

  const handleResetPassword = async () => {
    try {
      // Define your API endpoint for sending a verification code
      const apiUrl = ' https://ourbrandtv.com/mobile/public/api/GetVerifyCode';

      // Send a request to the API to get a verification code
      const response = await axios.post(apiUrl, {
        email,
      });

      if (response.data.status === '1') {
        setIsCodeSent(true);
        setVerificationCode(response.data.verification_code);
        console.log('Verification Code:', response.data);
      } else {
        // Handle the case where the code was not sent (e.g., invalid email)
        setIsCodeSent(false);
      }
    } catch (error) {
      console.error('Error sending verification code:', error);
    }
  };

  return (
    <div className="bg-black-900 flex flex-col font-poppins items-center justify-end mx-auto p-[18px] w-full">
      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1171px] mt-[62px] mx-auto md:px-5 w-full">
        <Img
          className="md:h-auto md:mt-0 mt-[40px] object-cover"
          src="images/logo.png"
          alt="whatsappimage"
        />
        <div className="flex flex-col items-center justify-start w-[40%]">
          <div className="flex flex-col items-start justify-start mr-0.5 mt-[50px] w-[87%] md:w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start md:ml-[0] ml-[5px] w-[100%] md:w-full min-w-[450px] sm:min-w-full">
              {isCodeSent && !isCodeVerified ? (
                <>
                  <p style={{ color: 'white', fontSize: '18px' }}>
                    Enter the verification code sent to your email:
                  </p>
                  <p className="text-lg text-white-A700">Verification Code</p>
                  <input
                    name="verificationCode"
                    placeholder="Verification Code"
                    className="leading-[normal]  p-2 placeholder:text-white-A700_87 text-white-A700 text-left text-lg w-full"
                    wrapClassName="rounded-[20px] w-full"
                    type="text"
                    variant="fill"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    style={{
                      background: '#1D1D1D',
                      border: 'none',
                      borderRadius: '6px',
                    }}
                  />
                  <Button
                    className="common-pointer border border-blue-700 border-solid cursor-pointer font-bold leading-[normal] min-w-[225px] md:ml-[0] ml-[118px] mt-[10px] shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
                    shape="round"
                    color="pink_500"
                    size="xs"
                    variant="fill"
                    onClick={handleVerifyCode}
                  >
                    Verify Code
                  </Button>
                </>
              ) : isCodeVerified ? (
                <>
                  <p style={{ color: 'white', fontSize: '18px' }}>
                    Set your new password:
                  </p>
                  <p className="text-lg text-white-A700">New Password</p>
                  <input
                    name="newPassword"
                    placeholder="New Password"
                    className="leading-[normal]  p-2 placeholder:text-white-A700_87 text-white-A700 text-left text-lg w-full"
                    wrapClassName="rounded-[20px] w-full"
                    type="password"
                    variant="fill"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    style={{
                      background: '#1D1D1D',
                      border: 'none',
                      borderRadius: '6px',
                    }}
                  />
                  <p className="text-lg text-white-A700">Confirm Password</p>
                  <input
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="leading-[normal]  p-2 placeholder:text-white-A700_87 text-white-A700 text-left text-lg w-full"
                    wrapClassName="rounded-[20px] w-full"
                    type="password"
                    variant="fill"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    style={{
                      background: '#1D1D1D',
                      border: 'none',
                      borderRadius: '6px',
                    }}
                  />
                  <Button
                    className="common-pointer border border-blue-700 border-solid cursor-pointer font-bold leading-[normal] min-w-[225px] md:ml-[0] ml-[118px] mt-[10px] shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
                    shape="round"
                    color="pink_500"
                    size="xs"
                    variant="fill"
                    onClick={handleUpdatePassword}
                  >
                    Update Password
                  </Button>
                </>
              ) : (
                <>
                  <p style={{ color: 'white', fontSize: '18px' }}>
                    Enter your email to receive a password reset link:
                  </p>
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
                      background: '#1D1D1D',
                      border: 'none',
                      borderRadius: '6px',
                    }}
                  />
                  <Button
                    className="common-pointer border border-blue-700 border-solid cursor-pointer font-bold leading-[normal] min-w-[225px] md:ml-[0] ml-[118px] mt-[10px] shadow-bs2 text-2xl md:text-[22px] text-center sm:text-xl"
                    shape="round"
                    color="pink_500"
                    size="xs"
                    variant="fill"
                    onClick={handleResetPassword}
                  >
                    Reset Password
                  </Button>
                </>
              )}
            </div>
            <div className="flex sm:flex-col flex-row gap-2 items-start justify-between mt-[18px] w-full min-w-[450px] sm:min-w-full">
              <a href="javascript:" className="sm:mt-0 mt-0.5 text-md text-white-A700_90">
                Privacy Policy
              </a>
              <a className="mb-0.5 text-md text-white-A700_90">Terms and Conditions</a>
              <p className="mb-0.5 text-md text-white-A700_90" onClick={() => navigate('/Disclaimer')}>
                Disclaimer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
