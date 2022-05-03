// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0wrMcfHBI8NJXR1OC2WyAqIQQCMzs830",
  authDomain: "music-20fd6.firebaseapp.com",
  projectId: "music-20fd6",
  storageBucket: "music-20fd6.appspot.com",
  appId: "1:224788380890:web:aeda41029da11e1914b9e3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// References
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
