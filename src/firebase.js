import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC7uSorS1_tYVx-pXAp7qn7VYdZdDY8Gb0",
  authDomain: "fir-f9698.firebaseapp.com",
  projectId: "fir-f9698",
  storageBucket: "fir-f9698.appspot.com",
  messagingSenderId: "965074035800",
  appId: "1:965074035800:web:e7d9eb4f5d2778e5a3962d",
  measurementId: "G-Q8DMM2C84M"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();


export { auth, db };