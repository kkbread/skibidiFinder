// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm2xMCLnHOf8TSo7d69N46FCJntaiw6vY",
  authDomain: "tinkle-time-6d69f.firebaseapp.com",
  projectId: "tinkle-time-6d69f",
  storageBucket: "tinkle-time-6d69f.firebasestorage.app",
  messagingSenderId: "483752082978",
  appId: "1:483752082978:web:8faa0f55f9f81a50a8547b",
  measurementId: "G-E6XV9QKG7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);