// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGSOvfBCX4_yJkZaFUE3H-XAJIerILl2o",
  authDomain: "linkedin-2d4fc.firebaseapp.com",
  projectId: "linkedin-2d4fc",
  storageBucket: "linkedin-2d4fc.firebasestorage.app",
  messagingSenderId: "479652548494",
  appId: "1:479652548494:web:42ba6e7241ada43a599edf",
  measurementId: "G-131NXW2M8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth,app};