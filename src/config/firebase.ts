import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1zEPxMZkS30gqZcvR49EVyLllvNXTTGI",
  authDomain: "smart-restock-planner.firebaseapp.com",
  projectId: "smart-restock-planner",
  storageBucket: "smart-restock-planner.firebasestorage.app",
  messagingSenderId: "515456096670",
  appId: "1:515456096670:web:9a07041e0c84c14f795e8f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);