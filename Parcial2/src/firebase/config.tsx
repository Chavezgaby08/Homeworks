// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6ZRWfmXXHgqpFhEdjtl5Bn-wugoM2Yqs",
  authDomain: "parcial2-4e6e2.firebaseapp.com",
  DatabaseURL: "https://parcial2-4e6e2-default-rtdb.firebaseio.com/",
  projectId: "parcial2-4e6e2",
  storageBucket: "parcial2-4e6e2.firebasestorage.app",
  messagingSenderId: "687796268655",
  appId: "1:687796268655:web:ead18a122358d55c54a79a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, app, auth };