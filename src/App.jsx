import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useState , useEffect } from "react";
import Routes from "./Routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "redux/UserContext";
import ReactModal from 'react-modal';
import UpcomingEventTimerBar from "components/UpcomingMoviesTimer.js";
import { auth } from "../src/services/Firebase";

ReactModal.setAppElement('#root'); // or any other root element in your HTML

function App() {
  const user= auth.currentUser;
  console.log(user);
  const [userData, setUserData] = useState({});
  console.log(userData);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, do something
        console.log('User is signed in:', user);
      } else {
        // User is signed out, do something else
        console.log('User is signed out');
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);
  console.log(user);

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
