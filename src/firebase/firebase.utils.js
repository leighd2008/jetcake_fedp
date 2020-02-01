import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAR4Yqf-WGlaaSGl0cSThf84sx-C1IP6Is",
  authDomain: "jetcake-fedp.firebaseapp.com",
  databaseURL: "https://jetcake-fedp.firebaseio.com",
  projectId: "jetcake-fedp",
  storageBucket: "jetcake-fedp.appspot.com",
  messagingSenderId: "532661055345",
  appId: "1:532661055345:web:59b9a94f39a51377aa90d0",
  measurementId: "G-DEEC55Y74Z"
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
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
