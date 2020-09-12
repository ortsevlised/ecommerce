import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config =
    {
        apiKey: "AIzaSyCGyyNzLwKR5qpnlwslFduv1rcPp6XETjE",
        authDomain: "jojo-db.firebaseapp.com",
        databaseURL: "https://jojo-db.firebaseio.com",
        projectId: "jojo-db",
        storageBucket: "jojo-db.appspot.com",
        messagingSenderId: "871066023483",
        appId: "1:871066023483:web:cba13133a3b4e587e70e1e",
        measurementId: "G-YL8QGJHYLC"
    };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, otherData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        } catch (e) {
            console.log("Error creating user", e.message)
        }
    }
    return userRef;
}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
