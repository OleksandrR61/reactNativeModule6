import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB8nevfP3Ww98nFFNKkE09TMOch7aCzVYU",
    authDomain: "testprogectreactlesson.firebaseapp.com",
    projectId: "testprogectreactlesson",
    storageBucket: "testprogectreactlesson.appspot.com",
    messagingSenderId: "242406168049",
    appId: "1:242406168049:web:e3e057d3975ee85af76050",
    measurementId: "G-3E67715TSZ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;