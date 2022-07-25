// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6yCz2fXcloU8LP8l7aFEI6sfge3iKSXc",
  authDomain: "netflix-f2df5.firebaseapp.com",
  projectId: "netflix-f2df5",
  storageBucket: "netflix-f2df5.appspot.com",
  messagingSenderId: "456145317950",
  appId: "1:456145317950:web:e71e6c3f13f7c898a3e16f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
