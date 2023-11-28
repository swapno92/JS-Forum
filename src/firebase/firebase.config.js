// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCs2cGNSXCboBp3v37g2aSY6LkRKluliA",
  authDomain: "assignment-twelve-ce342.firebaseapp.com",
  projectId: "assignment-twelve-ce342",
  storageBucket: "assignment-twelve-ce342.appspot.com",
  messagingSenderId: "163684851133",
  appId: "1:163684851133:web:29b6e8e7ed2506cca646d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;