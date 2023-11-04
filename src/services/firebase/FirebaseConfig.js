
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "reactsalti.firebaseapp.com",
  projectId: "reactsalti",
  storageBucket: "reactsalti.appspot.com",
  messagingSenderId: "589753862940",
  appId: "1:589753862940:web:4658143586418bb61308d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)