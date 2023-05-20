// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-TmfZ1Fpl5-hsrEWt5bP6GT63Ab4eMao",
  authDomain: "blockly-project-22b6d.firebaseapp.com",
  projectId: "blockly-project-22b6d",
  storageBucket: "blockly-project-22b6d.appspot.com",
  messagingSenderId: "473678429706",
  appId: "1:473678429706:web:f8aeab018719ce2c6f69f3",
  measurementId: "G-0KMCNR6F9V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
