import firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4AC1T_YVYpWZ4PIqVS9VnF8RoOXoHDrg",
  authDomain: "xplorado-9da45.firebaseapp.com",
  databaseURL: "https://xplorado-9da45.firebaseio.com",
  projectId: "xplorado-9da45",
  storageBucket: "xplorado-9da45.appspot.com",
  messagingSenderId: "242528628544",
  appId: "1:242528628544:web:be73eefeed2c4ae77214a5",
  measurementId: "G-W5K5QFC7NV",
};
//initializes firebase application, authentication and cloud storage
firebase.initializeApp(firebaseConfig);

export const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => false,
  },
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//instance of the google provider object
// firebase method signInWithPop - uses a popup / we could also use signInWithRedirect - redirecting user to  page
let provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = async () =>
  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(`logged in as ${result.user.displayName}`);
    })
    .catch((error) => console.error(error.message));

// auth.signInWithPopup(provider);

//returns users data
export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  //doc method gets a reference of the users document in users collection / get method retrieves current content of the document.
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  //checking to see of there is data referenced. if not we write data to the document.
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  //if there is data we return it to the user.
  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
