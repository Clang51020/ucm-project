
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbq2Pb9zQf-wJO05m9qoVtK2JhfD9RpbA",
  authDomain: "ambassador-management.firebaseapp.com",
  projectId: "ambassador-management",
  storageBucket: "ambassador-management.appspot.com",
  messagingSenderId: "879729160714",
  appId: "1:879729160714:web:859eedc7ae272aad5da5f3",
  measurementId: "G-M6EK42C627"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);