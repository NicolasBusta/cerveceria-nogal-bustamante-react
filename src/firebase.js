
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBkXJa_7UH6op2LT3W68JA5ebOMwgP2QVg",
  authDomain: "proyecto-react-cerveza-nogal.firebaseapp.com",
  projectId: "proyecto-react-cerveza-nogal",
  storageBucket: "proyecto-react-cerveza-nogal.appspot.com",
  messagingSenderId: "377877962487",
  appId: "1:377877962487:web:9bb8e9058981f2f235bdf2"
};


export const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);