import { initializeApp } from "firebase/app";

import {
  getFirestore ,
  collection ,
}from "firebase/firestore"

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
