import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDMEk3D1mwzNGOoU54xlKT_iD-0FvVzMME",
  authDomain: "facebook-clone-d0d6a.firebaseapp.com",
  databaseURL: "https://facebook-clone-d0d6a.firebaseio.com",
  projectId: "facebook-clone-d0d6a",
  storageBucket: "facebook-clone-d0d6a.appspot.com",
  messagingSenderId: "899019986380",
  appId: "1:899019986380:web:9e8e0341d94442e9207969",
  measurementId: "G-V4G3CQ6RFV",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
