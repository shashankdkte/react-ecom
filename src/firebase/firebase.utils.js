import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAHA1KD--QAlSQvkeGXjYVGEJe82tx5t-c",
  authDomain: "crwn-db-80932.firebaseapp.com",
  projectId: "crwn-db-80932",
  storageBucket: "crwn-db-80932.appspot.com",
  messagingSenderId: "879505305752",
  appId: "1:879505305752:web:09012492e060c1e8f2e0ed",
  measurementId: "G-RE838M12S0",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooogle = () => auth.signInWithPopup(provider);

export default firebase;
