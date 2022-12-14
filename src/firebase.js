import firebase, { firestore } from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyJkWatML42_xYYm7WzEfqs9XbJym2vkA",
  authDomain: "fb-clone-831fc.firebaseapp.com",
  projectId: "fb-clone-831fc",
  storageBucket: "fb-clone-831fc.appspot.com",
  messagingSenderId: "387683150255",
  appId: "1:387683150255:web:f027d5e86b427a0e50a75a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
