// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_CeD4FemyXyKxyVUJvf7-Gg4LMRNbeEc",
  authDomain: "claseejemplo-53406.firebaseapp.com",
  databaseURL: "https://claseejemplo-53406-default-rtdb.firebaseio.com/",
  projectId: "claseejemplo-53406",
  storageBucket: "claseejemplo-53406.firebasestorage.app",
  messagingSenderId: "549749749685",
  appId: "1:549749749685:web:a967c12f709a6215840bfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const firebaseStorage = getStorage(app);

const db = getFirestore();

export { auth, app, firebaseStorage, db };