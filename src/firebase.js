import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyD4AC1T_YVYpWZ4PIqVS9VnF8RoOXoHDrg",
    authDomain: "xplorado-9da45.firebaseapp.com",
    databaseURL: "https://xplorado-9da45.firebaseio.com",
    projectId: "xplorado-9da45",
    storageBucket: "xplorado-9da45.appspot.com",
    messagingSenderId: "242528628544",
    appId: "1:242528628544:web:fdc0e3bbc364df937214a5",
    measurementId: "G-CV4PSNW1VW"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return

    const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
