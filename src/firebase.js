import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNcxRMnW5PcWCO9F5kfuhAO0j6c3mnozc",
  authDomain: "react-email-pass-auth-a1c66.firebaseapp.com",
  projectId: "react-email-pass-auth-a1c66",
  storageBucket: "react-email-pass-auth-a1c66.appspot.com",
  messagingSenderId: "916713672939",
  appId: "1:916713672939:web:554b22288049e8e23beeae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
