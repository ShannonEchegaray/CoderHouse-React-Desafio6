import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD7lTLD7a8APB-PPolfTb8HafnZD187xDk",
  authDomain: "react-e-commerce-8712e.firebaseapp.com",
  projectId: "react-e-commerce-8712e",
  storageBucket: "react-e-commerce-8712e.appspot.com",
  messagingSenderId: "538459576213",
  appId: "1:538459576213:web:2f592d5032f054ffbf089c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)