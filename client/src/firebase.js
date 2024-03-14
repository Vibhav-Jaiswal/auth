// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-59881.firebaseapp.com",
  projectId: "mern-auth-59881",
  storageBucket: "mern-auth-59881.appspot.com",
  messagingSenderId: "125139626901",
  appId: "1:125139626901:web:a24540051fd2ddc77f249c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);