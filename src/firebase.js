// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJdsbbCS1V6vv2opMQ7b-wVnYZeyO-c94",
  authDomain: "todo-app-c0a35.firebaseapp.com",
  projectId: "todo-app-c0a35",
  storageBucket: "todo-app-c0a35.appspot.com",
  messagingSenderId: "694324487308",
  appId: "1:694324487308:web:eb77de3f6e2ff12c94c7a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);