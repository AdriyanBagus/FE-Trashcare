import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGf-lIBwyaGHOtEYqfQGwb112AmvJUJ3I",
  authDomain: "trashcare-29180.firebaseapp.com",
  databaseURL: "https://trashcare-29180-default-rtdb.firebaseio.com",
  projectId: "trashcare-29180",
  storageBucket: "trashcare-29180.appspot.com",
  messagingSenderId: "754970312876",
  appId: "1:754970312876:web:fb92098ef0bb9d798bdf09",
  measurementId: "G-R6XZ99FC3C"
};

// Initialize Firebase
export const Fire = initializeApp(firebaseConfig);
export const database = getDatabase(Fire)
export const firestore = getFirestore(Fire);