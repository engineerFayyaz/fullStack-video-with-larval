import React from 'react';
import ReactDOM from 'react-dom';
import { PayPalButton } from 'react-paypal-button';

const PayPalPayment = () => {
  const handleSuccess = (details, data) => {
    alert('Payment successful');
    // You can add your own logic here, like updating the user's subscription status.
  };

  return (
    <div>
      <h1>Pay with PayPal</h1>
      <PayPalButton
        amount="10.00" // Replace with your desired amount
        onSuccess={handleSuccess}
        options={{
          clientId: 'your_paypal_client_id', // Replace with your PayPal client ID
        }}
      />
    </div>
  );
};

export default PayPalPayment;

// You would use this component in your PaymentPage component
