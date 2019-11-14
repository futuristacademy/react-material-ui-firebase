/* == Firebase Configuration File == */

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase Configurations
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;