import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAV8VHW7adiCt4QZ8Dlh0bd0wl8Nb3kccU",
  authDomain: "chatapp-3262f.firebaseapp.com",
  projectId: "chatapp-3262f",
  storageBucket: "chatapp-3262f.appspot.com",
  messagingSenderId: "587517486267",
  appId: "1:587517486267:web:d20d6b0540119fc3def59e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
