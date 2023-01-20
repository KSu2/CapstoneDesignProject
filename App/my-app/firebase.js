// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { endEvent } from 'react-native/Libraries/Performance/Systrace';
import { FIREBASE_KEY } from '@env';
//import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optionale
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: 'capstonedesignproject-8748c.firebaseapp.com',
  databaseURL:
    'https://capstonedesignproject-8748c-default-rtdb.firebaseio.com',
  projectId: 'capstonedesignproject-8748c',
  storageBucket: 'capstonedesignproject-8748c.appspot.com',
  messagingSenderId: '806103822552',
  appId: '1:806103822552:web:8cc6743b627f510afd67ad',
  measurementId: 'G-7DFRQ7FBYQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
