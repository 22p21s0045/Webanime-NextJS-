// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhB6U9-lJIpUX65AujUroUSpksDjFkFfE",
  authDomain: "webanime-6a0b2.firebaseapp.com",
  databaseURL: "https://webanime-6a0b2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webanime-6a0b2",
  storageBucket: "webanime-6a0b2.appspot.com",
  messagingSenderId: "1090354034958",
  appId: "1:1090354034958:web:1803a3d34317be76577f5f",
  measurementId: "G-ZN1PMDPPJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
