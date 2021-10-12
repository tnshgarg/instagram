import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAse_lePh37Q8dZ7790AymuGkfXcZjfiuY",
  authDomain: "instagram-clone-cp-7fb2d.firebaseapp.com",
  projectId: "instagram-clone-cp-7fb2d",
  storageBucket: "instagram-clone-cp-7fb2d.appspot.com",
  messagingSenderId: "287500153285",
  appId: "1:287500153285:web:81255451945fe588341bac",
  measurementId: "G-3PXW7Z049W",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
