// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClezQ0vuCfI82oO5P6c06v44aLrumfnHc",
  authDomain: "crown-clothing-db-01.firebaseapp.com",
  projectId: "crown-clothing-db-01",
  storageBucket: "crown-clothing-db-01.appspot.com",
  messagingSenderId: "931412165794",
  appId: "1:931412165794:web:d67f27d49ab1d7c464c3fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export let auth = getAuth()
export let signInWithGooglePopup = () => signInWithPopup(auth, provider)

let db = getFirestore()

export let createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  let userDocRef = doc(db, 'users', userAuth.uid)
  let userSnapShot = await getDoc(userDocRef)
  if (!userSnapShot.exists()) {
    let { displayName, email } = userAuth
    let createdAt = new Date()
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    } catch (error) {
      console.log('Error while adding the user document to users collection')
    }
  }
  return userDocRef
}
export let createUser = async (email, password) => {
  if (!email || !password)
    return
  return await createUserWithEmailAndPassword(auth, email, password)
}


export let signInUser = async (email, password) => {
  if (!email || !password)
    return
  return await signInWithEmailAndPassword(auth, email, password)
}