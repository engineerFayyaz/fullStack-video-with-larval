import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useState , useEffect } from "react";
import Routes from "./Routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "redux/UserContext";
import ReactModal from 'react-modal';
import UpcomingEventTimerBar from "components/UpcomingMoviesTimer.js";
import { auth } from "../src/services/Firebase";

ReactModal.setAppElement('#root'); // or any other root element in your HTML

function App() {
  const user= auth.currentUser;

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, do something
        toast.success('Welcome back!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      } else {
        // User is signed out, do something else
        
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

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
