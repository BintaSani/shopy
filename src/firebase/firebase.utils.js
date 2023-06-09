import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config= {
    apiKey: "AIzaSyCADeXZUUG3K-6NtkGB826uvTRQGNPKA90",
    authDomain: "shopy-45d58.firebaseapp.com",
    projectId: "shopy-45d58",
    storageBucket: "shopy-45d58.appspot.com",
    messagingSenderId: "318510578431",
    appId: "1:318510578431:web:e65e9cb0bf99d38aee6aca",
    measurementId: "G-FD2DXVDDW3"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return;
 
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;