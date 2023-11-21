import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import Routes from "./Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "redux/UserContext";
import ReactModal from 'react-modal';
import UpcomingEventTimerBar from "components/UpcomingMoviesTimer.js";

ReactModal.setAppElement('#root'); // or any other root element in your HTML

function App() {
  return (
    <UserProvider>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Routes />
      <ToastContainer />
    </GoogleOAuthProvider>
    </UserProvider>
  );
}

export default App;
