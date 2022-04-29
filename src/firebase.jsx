import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBt6R4jxso1HDoG6aTC1YU5_MskJcQjInM",
  authDomain: "react-auth-d488e.firebaseapp.com",
  projectId: "react-auth-d488e",
  storageBucket: "react-auth-d488e.appspot.com",
  messagingSenderId: "922766423713",
  appId: "1:922766423713:web:a803d80734340ea49622e0",
  measurementId: "G-HWK3JKSXQC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;