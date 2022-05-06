// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnw6VAZLXc0B_51MGfSERIHoAnwhGnZ8o",
    authDomain: "slack-2-0-fef04.firebaseapp.com",
    projectId: "slack-2-0-fef04",
    storageBucket: "slack-2-0-fef04.appspot.com",
    messagingSenderId: "962090006833",
    appId: "1:962090006833:web:3eb9247f15a3b458331810",
    measurementId: "G-55HG8QKWSL"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth,db,provider};