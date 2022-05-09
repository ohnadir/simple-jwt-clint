// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDX8DFmRup3MO0ae13-P6rNW_jWwAZU7Y",
  authDomain: "simple-jwt.firebaseapp.com",
  projectId: "simple-jwt",
  storageBucket: "simple-jwt.appspot.com",
  messagingSenderId: "446313814439",
  appId: "1:446313814439:web:3e56d729da3e91084cbe82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;