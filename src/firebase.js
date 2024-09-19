// src/firebase-config.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0cj6xj3Qi4SFqklHgRvkSd7K9Vlu7-7A",
  authDomain: "pos-app-cly.firebaseapp.com",
  projectId: "pos-app-cly",
  storageBucket: "pos-app-cly.appspot.com",
  messagingSenderId: "933322055011",
  appId: "1:933322055011:web:50b6735cbff1e65708c756",
  measurementId: "G-FCSKGHKE5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
