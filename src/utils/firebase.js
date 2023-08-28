// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3XafmbG0eS5AaF8LeXGzHGWKaFBFZIzw",
  authDomain: "netflixgpt-73521.firebaseapp.com",
  projectId: "netflixgpt-73521",
  storageBucket: "netflixgpt-73521.appspot.com",
  messagingSenderId: "367639559616",
  appId: "1:367639559616:web:238d6dc299f659bd5adc25",
  measurementId: "G-LBTYLHTCXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();