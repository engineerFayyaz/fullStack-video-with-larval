// services/Firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDmP8ZRFu1G1IpiD_aYeFq-8EoaeeGwbg",
  authDomain: "web-video-straming.firebaseapp.com",
  projectId: "web-video-straming",
  storageBucket: "web-video-straming.appspot.com",
  messagingSenderId: "200003565474",
  appId: "1:200003565474:web:759f6c524639c6e0f7e4fb",
  measurementId: "G-97QRRJ639P",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({ display: "popup" });

export { auth, googleProvider, facebookProvider, signInWithPopup };
export default app;
