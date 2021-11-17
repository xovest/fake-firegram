// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgqL8x4HlV0JnQ1eWS5HdRiD5VDJFEu-U",
  authDomain: "firegram-bbb80.firebaseapp.com",
  projectId: "firegram-bbb80",
  storageBucket: "firegram-bbb80.appspot.com",
  messagingSenderId: "162583609323",
  appId: "1:162583609323:web:bffd5518dbe9f30a78a3ae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };