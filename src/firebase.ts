import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChXxNIBts7c7uQMzMuskUv_91KPOaOw48",
  authDomain: "react-firebase-23300.firebaseapp.com",
  projectId: "react-firebase-23300",
  storageBucket: "react-firebase-23300.appspot.com",
  messagingSenderId: "102510341341",
  appId: "1:102510341341:web:67dad4791a2dbe9352bf34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
