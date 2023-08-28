
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCtuycFNJA1OTWdOrvkErhUhCaCINnU8V4",
  authDomain: "miniblog-267a0.firebaseapp.com",
  projectId: "miniblog-267a0",
  storageBucket: "miniblog-267a0.appspot.com",
  messagingSenderId: "365990873616",
  appId: "1:365990873616:web:5ee63efd573c44915d5895"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}