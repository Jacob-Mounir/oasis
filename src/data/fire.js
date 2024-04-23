// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCZbYKuOIrR2D4AEBii1Pj4ajNYtEIPd_A",
	authDomain: "oasis-353c9.firebaseapp.com",
	projectId: "oasis-353c9",
	storageBucket: "oasis-353c9.appspot.com",
	messagingSenderId: "615872794139",
	appId: "1:615872794139:web:a0843fe4d60b8a63c772be"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
