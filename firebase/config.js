import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8nevfP3Ww98nFFNKkE09TMOch7aCzVYU",
    authDomain: "testprogectreactlesson.firebaseapp.com",
    projectId: "testprogectreactlesson",
    storageBucket: "testprogectreactlesson.appspot.com",
    messagingSenderId: "242406168049",
    appId: "1:242406168049:web:e3e057d3975ee85af76050",
    measurementId: "G-3E67715TSZ"
};

const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
export const storage = getStorage(firebase);
export const firestore = getFirestore(firebase);