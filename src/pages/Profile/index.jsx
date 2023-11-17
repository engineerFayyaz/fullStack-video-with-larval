import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "redux/UserContext";
import { Button, Img, Line, List, Text } from "components";
import Header1 from "components/Header1";
import Avatar from "components/Avatar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from 'react-modal';



const ProfilePage = () => {
  const navigate = useNavigate();
  const { userEmail } = useUser();
  const age = useUser().age;
  const emailPrefix = userEmail ? userEmail.split("@")[0] : "";

  const displayAge = age ? age : Math.floor(Math.random() * (50 - 18 + 1)) + 18;

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedAmount, setSelectedAmount] = useState(0);

  const [showTermsModal, setShowTermsModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [showPaymentOptionsFree, setShowPaymentOptionsFree] = useState(false);
  const [showPaymentOptionsBasic, setShowPaymentOptionsBasic] = useState(false);
  const [showPaymentOptionsPro, setShowPaymentOptionsPro] = useState(false);
  const [showPaymentOptionsFaithBased, setShowPaymentOptionsFaithBased] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);


  const openTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const closeTermsModal = () => {
    setIsTermsModalOpen(false);
  };
  

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setSelectedAmount(plans[plan].amount);

    if (plan === "free") {
      navigate('/');
      toast.success("Your Free membership is activated");
    } else {
      // Show payment options based on the selected plan
      if (plan === "basic") {
        setShowPaymentOptionsBasic(true);
      } else if (plan === "pro") {
        setShowPaymentOptionsPro(true);
      } else if (plan === "faithBased") {
        setShowPaymentOptionsFaithBased(true);
      }
      setShowPaymentOptions(true);
    }
  };

  const plans = {
    free: { slots: 10, duration: "Mon-Fri", amount: 0 },
    basic: { slots: 10, duration: "Mon-Fri", time: "12pm till 11pm", amount: 500 },
    pro: { slots: 15, duration: "Mon-Sat", time: "6pm and 10pm", amount: 1500 },
    faithBased: { slots: 4, duration: "Sat to Sun Morning", time: "6am to 12pm", amount: 400 },
  };

  const generateRandomPhoneNumber = () => {
    const countryCode = '+1'; // US country code
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const firstPart = Math.floor(Math.random() * 1000);
    const secondPart = Math.floor(Math.random() * 10000);

    // Format the random number with the specified format
    return `${countryCode} (${areaCode}) ${firstPart.toString().padStart(3, '0')}-${secondPart.toString().padStart(4, '0')}`;
  };

  const randomPhoneNumber = generateRandomPhoneNumber();

  const handleBuyNow = () => {
    if (selectedPlan === "free") {
      navigate('/');
      toast.success("Your Free membership is activated");
    } else {
      // Handle buy now based on the selected plan
      handlePaymentMethodSelected("PayPal");  // Adjust as needed
    }
  };

  const handlePaymentMethodSelected = (method) => {
  if (method === "Stripe") {
    let stripePaymentURL;

    // Generate the appropriate Stripe link based on the selected plan
    if (selectedPlan === "basic") {
      stripePaymentURL = "https://checkout.stripe.com/c/pay/cs_live_a1aMsb6My2NiPg0hMgCA9yPoVYQjVLQsorzFrKmDq7FNaUV5UdmMxTlLLm#fidkdWxOYHwnPyd1blppbHNgWjA0SkZTUXZGUUxhbn8yc2oyTm9RazQzajRuZzx2YVZ8cW1Kd0RxXDNDYU43fzZia313PUxOM2EzRlMzNXxKU1NvXGRIZElSVm19ZkgxTEtGUmZcQXRRdG5zNTVxNH9XYVNwdycpJ3VpbGtuQH11anZgYUxhJz8nMnZMN2doPEgxPGk9N0JmZEBAJ3gl";
    } else if (selectedPlan === "pro") {
      stripePaymentURL = "https://checkout.stripe.com/c/pay/cs_live_a1f36Qdw4QvRC1sJmQYHAcB1owlZ5Y62TYwYSk1pygN6CKRTMuCqqalrGW#fidkdWxOYHwnPyd1blppbHNgWjA0SkZTUXZGUUxhbn8yc2oyTm9RazQzajRuZzx2YVZ8cW1Kd0RxXDNDYU43fzZia313PUxOM2EzRlMzNXxKU1NvXGRIZElSVm19ZkgxTEtGUmZcQXRRdG5zNTVxNH9XYVNwdycpJ3VpbGtuQH11anZgYUxhJz8nYVczNTZgZ1BmZHVmM1J2NTU3J3gl";
    } else if (selectedPlan === "faithBased") {
      stripePaymentURL = "https://checkout.stripe.com/c/pay/cs_live_a1jOo0jTKs9PYVHpi7M5oQ9LBQSe3ek9s4D6L1TncXZWh3b6L7xNaoXyFP#fidkdWxOYHwnPyd1blppbHNgWjA0SkZTUXZGUUxhbn8yc2oyTm9RazQzajRuZzx2YVZ8cW1Kd0RxXDNDYU43fzZia313PUxOM2EzRlMzNXxKU1NvXGRIZElSVm19ZkgxTEtGUmZcQXRRdG5zNTVxNH9XYVNwdycpJ3VpbGtuQH11anZgYUxhJz8nPXJIMW9wM39WZHVmNk5iM2p1J3gl";
    }

    const stripePaymentWindow = window.open(stripePaymentURL, '_blank');
    if (stripePaymentWindow) {
      stripePaymentWindow.focus();
    } else {
      toast.error("Popup blocked by the browser");
    }
  } else if (method === "PayPal") {
    // Handle PayPal payment
    const paypalPaymentURL = `https://paypal.me/ourbrandtv?country.x=US&locale.x=en_US&amount=${selectedAmount}`;
    const paypalPaymentWindow = window.open(paypalPaymentURL, '_blank');

    if (paypalPaymentWindow) {
      paypalPaymentWindow.focus();
    } else {
      toast.error("Popup blocked by the browser");
    }
  }

  // Reset the state after handling the payment method
  setShowPaymentOptions(false);
  setShowPaymentOptionsFree(false);
  setShowPaymentOptionsBasic(false);
  setShowPaymentOptionsPro(false);
  setShowPaymentOptionsFaithBased(false);
};

 const handleTermsClick = () => {
  console.log("Terms and Conditions button clicked");
  setShowTermsModal(true);
};
const handleAcceptTerms = () => {
 
  // Use the 'navigate' function to redirect to the "/Terms" route
  window.open('/Terms', '_blank');
};
  return (
    <>
    <div className="bg-gray-900 flex flex-col font-opensans gap-[31px] items-center justify-start mx-auto p-2 shadow-bs1 w-full">
      <Header1 className=" flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full"/>
      <div className="flex flex-col items-center justify-start md:px-5">
        <Text className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100" size="txtOpenSansRomanBold32">
          Profile
        </Text>
      </div>
      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1207px] mx-auto md:px-5 w-full">
        <Avatar name={emailPrefix} />
        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[258px]">
          <Text className="sm:text-[40px] md:text-[46px] text-[50px] text-gray-100" size="txtOpenSansRomanExtraBold50">
            {emailPrefix && <p>{emailPrefix.toUpperCase()}</p>}
          </Text>
          <Text className="ml-0.5 md:ml-[0] mt-[9px] text-gray-100 text-xl" size="txtPoppinsRegular20">
            <span className="text-gray-100 font-opensans text-left font-normal">Email:</span>
            <span className="text-gray-100 font-opensans text-left font-bold">{userEmail && <p>{userEmail}</p>}</span>
          </Text>
          <Text className="ml-0.5 md:ml-[0] mt-[13px] text-gray-100 text-xl" size="txtPoppinsRegular20">
            <span className="text-gray-100 font-opensans text-left font-normal">Age: </span>
            <span className="text-gray-100 font-opensans text-left font-bold">{displayAge}</span>
          </Text>
          <Text className="ml-0.5 md:ml-[0] mt-2.5 text-gray-100 text-xl" size="txtPoppinsRegular20">
            <span className="text-gray-100 font-opensans text-left font-normal">Address: </span>
            <span className="text-gray-100 font-opensans text-left font-bold">NIL</span>
          </Text>
          <Text className="ml-0.5 md:ml-[0] mt-3 text-gray-100 text-xl" size="txtPoppinsRegular20">
            <span className="text-gray-100 font-opensans text-left font-normal">Phone Number: </span>
            <span className="text-gray-100 font-opensans text-left font-bold">{generateRandomPhoneNumber()}</span>
          </Text>
        </div>
        <Img className="h-10 md:ml-[0] ml-[326px] w-[39px]" src="images/img_checkmark.svg" alt="checkmark" />
      </div>
      <List
        className="sm:flex-col flex-row font-inter gap-8 grid sm:grid-cols-1 md:grid-cols-2 justify-center max-w-[1316px] mb-8 mx-auto md:px-5 "
        style={{ display: "flex" }}
        orientation="horizontal"
      >
        {Object.keys(plans).map((planKey) => (
          <div key={planKey} className="bg-white-A700 flex flex-1 flex-col items-center justify-start pl-3 py-3 rounded-[20px] w-full">
            <div className="flex flex-col justify-start my-3 w-full">
              <div className="flex flex-row gap-2 items-center justify-start ml-1 md:ml-[0] w-3/4 md:w-full">
                <Img className="h-10 w-10" src="images/img_lightbulb.svg" alt="lightbulb" />
                <Text className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02" size="txtInterBold32">
                  {plans[planKey].duration === "Mon-Sat" && plans[planKey].time
                    ? `${planKey.charAt(0).toUpperCase()}${planKey.slice(1)} (${plans[planKey].duration}, ${plans[planKey].time})`
                    : `${planKey.charAt(0).toUpperCase()}${planKey.slice(1)} (${plans[planKey].duration})`}
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start ml-3 md:ml-[0] mt-8 w-auto">
                <Text className="text-[22px] text-gray-500 sm:text-lg md:text-xl w-full" size="txtInterRegular22">
                  What You’ll Get
                </Text>
                <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                  <Img className="h-6 w-6" src="images/img_bxscheckcircle.svg" alt="bxscheckcircle" />
                  <Text className="text-gray-900_02 text-lg w-auto" size="txtInterRegular18">
                    {plans[planKey].slots}x slots of 28:30(28 minutes and 30 seconds)
                  </Text>
                </div>
                {plans[planKey].time && (
                  <div className="flex flex-row gap-2 items-start justify-start w-[281px]">
                    <Img className="h-6 w-6" src="images/img_bxscheckcircle.svg" alt="bxscheckcircle_One" />
                    <Text className="text-gray-900_02 text-lg w-auto" size="txtInterRegular18">
                      {plans[planKey].time}
                    </Text>
                  </div>
                )}
              </div>
              <Line className="bg-gray-500 h-px mr-3 mt-9 w-[96%]" />
              <Text
                className="ml-3 md:ml-[0] mt-[63px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900_02"
                size="txtInterBold32"
              >
                {plans[planKey].amount === 0 ? "Free" : `$${plans[planKey].amount}`}
              </Text>
              <Button
                className={`cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-6 text-[22px] text-center sm:text-lg md:text-xl ${termsAccepted ? "active" : ""}`}
                shape="round"
                color="purple_A100"
                size="md"
                variant="fill"
                onClick={() => handleSelectPlan(planKey)}
              >
                Choose
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[257px] ml-3 md:ml-[0] mr-6 mt-3 text-[22px] text-center sm:text-lg md:text-xl"
                shape="round"
                color="blue_A700"
                size="md"
                variant="fill"
                onClick={handleAcceptTerms}
              >
                Terms and Conditions
              </Button>
              {showPaymentOptions && (
                <div className="mt-4">
                  <label>Select Payment Method:</label>
                  <select
                    value={selectedPlan}
                    onChange={(e) => handlePaymentMethodSelected(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="Stripe">Stripe</option>
                    <option value="PayPal">PayPal</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        ))}
      </List>
    </div>
  </>
  );
};

export default ProfilePage;
