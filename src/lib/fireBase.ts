import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDqHOs_yZNSoSYmfOeEWQ74mDQ0T5OOEwk",
  authDomain: "planner-db-8623c.firebaseapp.com",
  projectId: "planner-db-8623c",
  storageBucket: "planner-db-8623c.firebasestorage.app",
  messagingSenderId: "354260370413",
  appId: "1:354260370413:web:e8f6eb92888fb6f2d61de4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
