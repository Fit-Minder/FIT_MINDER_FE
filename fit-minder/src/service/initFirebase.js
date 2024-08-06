// src/service/initFirebase.js
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB4NJgBIXe_6oKZKi5Wt5pSyt9uPnSyni8',
  authDomain: 'fitminderfcm.firebaseapp.com',
  projectId: 'fitminderfcm',
  storageBucket: 'fitminderfcm.appspot.com',
  messagingSenderId: '851446458104',
  appId: '1:851446458104:web:4238a3dec480ba25da7d0d',
  measurementId: 'G-FZW7JTWGKN',
};

export const app = initializeApp(firebaseConfig);
