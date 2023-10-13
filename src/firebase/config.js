import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAO16vFaplCKTiv8c9aZY6RG-gidXw4ezo",
    authDomain: "olx-clone-e2a1b.firebaseapp.com",
    projectId: "olx-clone-e2a1b",
    storageBucket: "olx-clone-e2a1b.appspot.com",
    messagingSenderId: "647322276254",
    appId: "1:647322276254:web:cfcf81cb3a0caa2c19468f",
    measurementId: "G-XFJ0GMZ2NM"
  };



export default firebase.initializeApp(firebaseConfig)