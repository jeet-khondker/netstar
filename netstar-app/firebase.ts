// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX1UPuYWmtKIbkLtCiKNO0EfBCgTZQb44",
  authDomain: "netstar-2022.firebaseapp.com",
  projectId: "netstar-2022",
  storageBucket: "netstar-2022.appspot.com",
  messagingSenderId: "876620978504",
  appId: "1:876620978504:web:7da9aa2884169a1b6b7b7d",
  measurementId: "G-FCPN06KDSZ"
};

// Firebase Initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app
export { auth, db }