import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA-_kLL2kNs3lV8gijiGuggA6GIGgOGdJU",
    authDomain: "eshop-app-aeada.firebaseapp.com",
    projectId: "eshop-app-aeada",
    storageBucket: "eshop-app-aeada.appspot.com",
    messagingSenderId: "586602074249",
    appId: "1:586602074249:web:6640c194a41f3230083658"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);


  const provider =new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

  export const db=getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())
    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createDate = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createDate
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
        return userDocRef;
    }


  }