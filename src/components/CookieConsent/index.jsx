import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { toast } from 'react-toastify';

const App = () => {
  const handleAccept = () => {
    // Handle logic when the user accepts cookies
    toast.success('cookies accepted');
    // Save user information in a cookie
    document.cookie = 'userInfo=accepted; expires=365;';
  };

  const handleDecline = () => {
    // Handle logic when the user declines cookies
    toast.error('Cookies declined');
  };

  return (
    <div>
      {/* Your main content goes here */}

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="myCookieConsentCookie"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: 'blue', fontSize: '13px' }}
        declineButtonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={365}
        onAccept={handleAccept}
        onDecline={handleDecline}
      >
        <p>
          OurBrandTV uses cookies to ensure you get the best experience on our website.
          {' '}<a href="/privacy-policy">Learn more</a>
        </p>
      </CookieConsent>
    </div>
  );
};

export default App;
