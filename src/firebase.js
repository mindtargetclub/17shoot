// import firebase from 'firebase/app';
// import 'firebase/firestore'
// import 'firebase/firebase-auth'
// import 'firebase/storage'

// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//     measurementId: ""
//   };

//   // Initialize Firebase
//   const fb = firebase.initializeApp(firebaseConfig);
//   const db = firebase.firestore();
//   export {fb,db}

import firebase from 'firebase/app';

import "firebase/database";

import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBfGRf3rz_p6R21JDLYjpYjXjwKrLaHb8c",
  authDomain: "nm-tayal.firebaseapp.com",
  databaseURL: "https://nm-tayal-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nm-tayal",
  storageBucket: "nm-tayal.appspot.com",
  messagingSenderId: "816237299811",
  appId: "1:816237299811:web:507e570a2200ce90dd1056",
  measurementId: "G-FD3QSMYTP3"
  };

  // Initialize Firebase
  
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const datab = firebase.database();
  const fbst = firebase.storage();
  // const db_words = firebase.ref("/words");; 
  
  export {fb,db,datab,fbst,}