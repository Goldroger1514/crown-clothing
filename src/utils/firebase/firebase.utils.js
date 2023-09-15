// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
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
export let signOutUser = async () => await signOut(auth)
export let addCollectionDocuments = async (collectionKey, objects) => {
  let collectionRef = collection(db, collectionKey)
  let batch = writeBatch(db)
  objects.forEach(object => {
    let docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })
  await batch.commit()
}
export let getCategoriesAndDocuments = async () => {
  let collectionRef = collection(db, 'products')
  let q = query(collectionRef)
  let querySnapShot = getDocs(q)
  let categoryMap = (await querySnapShot).docs.reduce((acc, docSnapShot) => {
    let { title, items } = docSnapShot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})
  return categoryMap
}