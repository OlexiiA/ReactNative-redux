// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import * as firebase from 'firebase'; 
// import 'firebase/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyCwkNHvhNAElmovEEFk5OweGQ2TADDpYLA",
//     authDomain: "reactnative-social-cec13.firebaseapp.com",
//     projectId: "reactnative-social-cec13",
//     storageBucket: "reactnative-social-cec13.appspot.com",
//     messagingSenderId: "1081274844382",
//     appId: "1:1081274844382:web:f46b96129e7b58baecee4f",
//     measurementId: "G-WZFCPJE2LV"
//   };

//   firebase.initializeApp(firebaseConfig);

//   export default firebase;
// Import the functions you need from the SDKs you need
// import {
//   initializeAuth,
//   getReactNativePersistence
// } from 'firebase/auth/react-native';
// import firebase from '@firebase/app';
// require('firebase/auth');
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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