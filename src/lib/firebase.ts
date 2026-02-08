// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApUI-1ECRV6CuWvByPhxnJX_94_eK1NA0",
  authDomain: "outfevib-e.firebaseapp.com",
  projectId: "outfevib-e",
  storageBucket: "outfevib-e.firebasestorage.app",
  messagingSenderId: "322024946046",
  appId: "1:322024946046:web:2013375f540a230dda1b2f",
  measurementId: "G-CY3DEVNW2V"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);