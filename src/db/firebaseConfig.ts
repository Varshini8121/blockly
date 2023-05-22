// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIjBXxjefZHLVwXTVODRKCZdaKNejbTFQ",
  authDomain: "fyp-project-fc647.firebaseapp.com",
  projectId: "fyp-project-fc647",
  storageBucket: "fyp-project-fc647.appspot.com",
  messagingSenderId: "652326938482",
  appId: "1:652326938482:web:c2ade6b67d0cda0727dfeb",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(Firebase);

export const db = getFirestore(Firebase);
