import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDnMOj2C2qQjpHmoX5GTyMMFn0Hq8gaNMI",
  authDomain: "marketplace-db-b3fbe.firebaseapp.com",
  projectId: "marketplace-db-b3fbe",
  storageBucket: "marketplace-db-b3fbe.appspot.com",
  messagingSenderId: "367439155159",
  appId: "1:367439155159:web:c065456fa1475ddee7c592",
  measurementId: "G-VFMLP54GCT",
};

export const createUserProfileDocument = async (userAuth: any, additionalData: any = null) => {
  if (!userAuth) return;

  console.log(additionalData);

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user', error);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;