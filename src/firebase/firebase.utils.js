import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC8DuMQ2Gt9WlURZIFhtjdCr5TvNqJrJhY",
    authDomain: "crown-db-75b1f.firebaseapp.com",
    databaseURL: "https://crown-db-75b1f.firebaseio.com",
    projectId: "crown-db-75b1f",
    storageBucket: "",
    messagingSenderId: "95918770020",
    appId: "1:95918770020:web:954fc425a0be0f77"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;