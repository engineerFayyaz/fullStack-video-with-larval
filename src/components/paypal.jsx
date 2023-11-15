import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";

const PayPalPayment = ({ amount, onSuccess }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": " AUxKYDVU_J7-HQ8QqIN8dzXt9-qu_LcQzp12tN9mWujMg83oJrOI96rxHTGCmGD1pViFB8NGpPylgiaN" }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          // Capture the funds from the transaction
          return actions.order.capture().then(function (details) {
            // Call your server to save the transaction
            onSuccess(); // Trigger any success action in your app
            toast.success("Payment successful!");
          });
        }}
        onError={(err) => {
          console.error("PayPal Error:", err);
          toast.error("Payment failed. Please try again.");
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
