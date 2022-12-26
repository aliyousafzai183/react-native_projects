import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7IstPjMGRDfZG0_Lu9_bCYhbszOrX1Fs",
  authDomain: "mydb-163ee.firebaseapp.com",
  projectId: "mydb-163ee",
  storageBucket: "mydb-163ee.appspot.com",
  messagingSenderId: "377241875774",
  appId: "1:377241875774:web:e885699b4f33aa9896686f",
  measurementId: "G-JC0FDT8R9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};