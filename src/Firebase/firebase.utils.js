import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB89St58PkXgbAKs_1R1A0jvUPZRPns7w0",
    authDomain: "crown-store-b7b7e.firebaseapp.com",
    databaseURL: "https://crown-store-b7b7e.firebaseio.com",
    projectId: "crown-store-b7b7e",
    storageBucket: "crown-store-b7b7e.appspot.com",
    messagingSenderId: "307658471989",
    appId: "1:307658471989:web:bc818dc88ba46d16408f7c",
    measurementId: "G-8LVW9PN1WP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;