import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAS7erVb3pMqZkbNyXRsOP80Kgv2VwUY7Y",
  authDomain: "facebook-messenger-clone-938c1.firebaseapp.com",
  projectId: "facebook-messenger-clone-938c1",
  storageBucket: "facebook-messenger-clone-938c1.appspot.com",
  messagingSenderId: "603064963285",
  appId: "1:603064963285:web:ecc7274c7da0f168ef125c",
});

const db = firebaseApp.firestore();

export default db;
