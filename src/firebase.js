import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAxBOxslDl1p8emkyQD5TOwI4Mj7-HFHSM",
  authDomain: "learn-firebase-with-ninja.firebaseapp.com",
  projectId: "learn-firebase-with-ninja",
  storageBucket: "learn-firebase-with-ninja.appspot.com",
  messagingSenderId: "1034556543731",
  appId: "1:1034556543731:web:0ec7d1800d3f45b075dd86",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const colRef = collection(db, "books");

export const auth = getAuth();

createUserWithEmailAndPassword(auth, "hello@gmail.com", "123456").then(
  (cred) => {
    console.log(cred.user);
  }
);


import { signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(auth, "hi@gmail.com", "123456")
.then((res) => {
  console.log(res.user)
});
