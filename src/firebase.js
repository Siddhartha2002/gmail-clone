import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3OuV1_YzgyvZOMIDBuIWSFN7-igamRv8",
  authDomain: "clone-c8281.firebaseapp.com",
  projectId: "clone-c8281",
  storageBucket: "clone-c8281.appspot.com",
  messagingSenderId: "477451670423",
  appId: "1:477451670423:web:eabdbafd9914aa0189aad2",
  measurementId: "G-K60M2RWYW5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
