// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClTQXEbaG_CmGVWCZ5DnJupJnCcCgi9B8",
  authDomain: "ecommerce-charitostore.firebaseapp.com",
  projectId: "ecommerce-charitostore",
  storageBucket: "ecommerce-charitostore.appspot.com",
  messagingSenderId: "152911354430",
  appId: "1:152911354430:web:c56ef3cb9e89fe662a8f6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);