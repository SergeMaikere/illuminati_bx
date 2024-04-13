// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "illuminatibx.firebaseapp.com",
  projectId: "illuminatibx",
  storageBucket: "illuminatibx.appspot.com",
  messagingSenderId: "12903479417",
  appId: "1:12903479417:web:6eaf47f30cb4d4719bfca8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);