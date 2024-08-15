// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQXs0nTz0QGD3WT47bCdZg4MXA3gKjvGA",
  authDomain: "netflix-gpt-f8b5d.firebaseapp.com",
  projectId: "netflix-gpt-f8b5d",
  storageBucket: "netflix-gpt-f8b5d.appspot.com",
  messagingSenderId: "709765894249",
  appId: "1:709765894249:web:4620eb8a6ac526355d92f8",
  measurementId: "G-DNSMML72DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();