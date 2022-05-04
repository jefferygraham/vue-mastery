// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPuP9QyrOci0gb7ZkZVqnAoUGLM2f22UE",
  authDomain: "music-a8758.firebaseapp.com",
  projectId: "music-a8758",
  storageBucket: "music-a8758.appspot.com",
  appId: "1:77720731712:web:1aee784f062bfbecffdfa5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// References
const auth = firebase.auth();
const db = firebase.firestore();
db.settings({ experimentalForceLongPolling: true });

const usersCollection = db.collection("users");

export { auth, usersCollection };
