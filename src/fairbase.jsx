import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKgiD2J1Mgx7HRW0dhuU03I9wCQycEyEk",
  authDomain: "recipe-book-8ecbf.firebaseapp.com",
  projectId: "recipe-book-8ecbf",
  storageBucket: "recipe-book-8ecbf.appspot.com",
  messagingSenderId: "416145234974",
  appId: "1:416145234974:web:65a0085a00b81aed9ca20f",
  measurementId: "G-WTKDDR4QSS"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };