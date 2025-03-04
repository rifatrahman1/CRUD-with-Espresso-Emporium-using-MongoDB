// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz0smdAocBdUXP5u_3x3KvuhfQ3sM5qR4",
  authDomain: "coffee-server-3848b.firebaseapp.com",
  projectId: "coffee-server-3848b",
  storageBucket: "coffee-server-3848b.firebasestorage.app",
  messagingSenderId: "170090273799",
  appId: "1:170090273799:web:5ec106970a921edd895ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;