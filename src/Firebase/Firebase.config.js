// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQoUh2We47Ibl_HNSyYUXQFXs7anXK9wU",
    authDomain: "react-dragon-news-auth-69abc.firebaseapp.com",
    projectId: "react-dragon-news-auth-69abc",
    storageBucket: "react-dragon-news-auth-69abc.appspot.com",
    messagingSenderId: "90011130764",
    appId: "1:90011130764:web:70472c77a1239da95ed4a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
