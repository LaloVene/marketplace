import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDnMOj2C2qQjpHmoX5GTyMMFn0Hq8gaNMI",
  authDomain: "marketplace-db-b3fbe.firebaseapp.com",
  projectId: "marketplace-db-b3fbe",
  storageBucket: "marketplace-db-b3fbe.appspot.com",
  messagingSenderId: "367439155159",
  appId: "1:367439155159:web:c065456fa1475ddee7c592",
  measurementId: "G-VFMLP54GCT",
};

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any = null
) => {
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
      console.log("Error creating user", error);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any[]
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections: any) => {
  const transformedCollection = collections.docs.map((doc: any) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator: any, collection: any) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
