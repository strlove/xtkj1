// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBS7OVifgB_8udUhRoHeHq-_VLHltDWhAw",
  authDomain: "totoro-90ebf.firebaseapp.com",
  projectId: "totoro-90ebf",
  storageBucket: "totoro-90ebf.appspot.com",
  messagingSenderId: "602471554348",
  appId: "1:602471554348:web:daaa51d13e21ea2c02e089",
  measurementId: "G-GC0ZYXJ56L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();