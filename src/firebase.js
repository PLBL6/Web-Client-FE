// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhpPUCjMgho0eFS9MW4Z5JYC2sEJoKdlM",
  authDomain: "login-d92e4.firebaseapp.com",
  projectId: "login-d92e4",
  storageBucket: "login-d92e4.appspot.com",
  messagingSenderId: "379031024744",
  appId: "1:379031024744:web:c28af3227901b8943577dd",
  measurementId: "G-EB2GZGTZCH"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase)

