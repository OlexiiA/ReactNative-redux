
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import 'firebase/storage';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCwkNHvhNAElmovEEFk5OweGQ2TADDpYLA",
  authDomain: "reactnative-social-cec13.firebaseapp.com",
  projectId: "reactnative-social-cec13",
  storageBucket: "reactnative-social-cec13.appspot.com",
  messagingSenderId: "1081274844382",
  appId: "1:1081274844382:web:7fc74e16531c94cfecee4f",
  measurementId: "G-CCGZMC724T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

 
export const auth = getAuth();
export const db = getFirestore();