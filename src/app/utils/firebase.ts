import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "illuminatibx.firebaseapp.com",
  projectId: "illuminatibx",
  storageBucket: "illuminatibx.appspot.com",
  messagingSenderId: "12903479417",
  appId: "1:12903479417:web:6eaf47f30cb4d4719bfca8"
};

export const app = initializeApp(firebaseConfig)