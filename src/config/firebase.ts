// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSslP3fBi0HR6WUqDQHy1C0gKb-nP5jJ8",
  authDomain: "social-69ff4.firebaseapp.com",
  projectId: "social-69ff4",
  storageBucket: "social-69ff4.appspot.com",
  messagingSenderId: "1017884300569",
  appId: "1:1017884300569:web:018f6695d7df625f342188"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()