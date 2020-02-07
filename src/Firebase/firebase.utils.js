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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

    if(!snapShot.exits) {
     
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }) 
        } catch (error) {
            console.log('error creating user', error.message)
        }
        
    }
    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj)
    });

    return await batch.commit();
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;