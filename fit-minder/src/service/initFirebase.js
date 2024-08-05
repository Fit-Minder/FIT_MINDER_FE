// src/service/initFirebase.js
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBqTix4yMtj4_pWDDLE7ccRPCOmd1_gwA",
  authDomain: "fit-minder-8e052.firebaseapp.com",
  projectId: "fit-minder-8e052",
  storageBucket: "fit-minder-8e052.appspot.com",
  messagingSenderId: "238627606106",
  appId: "1:238627606106:web:89c9b55f4544548e905263",
  measurementId: "G-53CP6CPFNF"
};

export const app = initializeApp(firebaseConfig);
