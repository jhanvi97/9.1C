import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcaGbrt7xaBr0PC8_T5xKuxX-MPZFL8bQ",
  authDomain: "react-authentication-1c225.firebaseapp.com",
  projectId: "react-authentication-1c225",
  storageBucket: "react-authentication-1c225.appspot.com",
  messagingSenderId: "819872593772",
  appId: "1:819872593772:web:6c7a9e6279a9203ba6e549",
  measurementId: "G-K96HLHZXD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;