// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAU1lafLRxDmXsyZZUzPOTdaWKQwlPtzM",
  authDomain: "travel-planner-74169.firebaseapp.com",
  projectId: "travel-planner-74169",
  storageBucket: "travel-planner-74169.firebasestorage.app",
  messagingSenderId: "1436223423",
  appId: "1:1436223423:web:82d3d7712c0d69b62ec30a",
  measurementId: "G-ES10EY0CGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth;
if (getAuth._initialized) {
  auth = getAuth(app);
} else {
  // Initialize auth with persistence for React Native
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
}


export {app, auth};
export const db = getFirestore(app);



