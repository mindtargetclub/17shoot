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
  apiKey: "AIzaSyA-sh6CUx3d3MHHfqugmTOzTdhbMIoXCCg",
  authDomain: "h2fnotebkup2-97fd4.firebaseapp.com",
  databaseURL: "https://h2fnotebkup2-97fd4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "h2fnotebkup2-97fd4",
  storageBucket: "h2fnotebkup2-97fd4.appspot.com",
  messagingSenderId: "961384345618",
  appId: "1:961384345618:web:b771027b304fc3087868cb"
  };

  // Initialize Firebase
  
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const datab = firebase.database();
  const fbst = firebase.storage();
  // const db_words = firebase.ref("/words");; 
  
  export {fb,db,datab,fbst,}