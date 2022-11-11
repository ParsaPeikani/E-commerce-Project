import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBY7J0zfuhacO3QVvAC3mYRqV3gq5_0yYY",
    authDomain: "crwn-db-new-157f0.firebaseapp.com",
    projectId: "crwn-db-new-157f0",
    storageBucket: "crwn-db-new-157f0.appspot.com",
    messagingSenderId: "634605457588",
    appId: "1:634605457588:web:1267ad59ba488b9b28c7e1",
    measurementId: "G-6K1V9R0P40"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;