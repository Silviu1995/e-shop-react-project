
import {initializeApp} from 'firebase/app';
import {
      getAuth,
      createUserWithEmailAndPassword, 
      signInWithPopup, 
      GoogleAuthProvider,
      signInWithEmailAndPassword,
      signOut,
      onAuthStateChanged
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

const firebaseConfig = {
    apiKey: "AIzaSyA-_kLL2kNs3lV8gijiGuggA6GIGgOGdJU",
    authDomain: "eshop-app-aeada.firebaseapp.com",
    projectId: "eshop-app-aeada",
    storageBucket: "eshop-app-aeada.appspot.com",
    messagingSenderId: "586602074249",
    appId: "1:586602074249:web:6640c194a41f3230083658"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);



  const provider =new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider)
  export const db=getFirestore();

  export const addCollectionAndDocument = async (collectionKey,objectsToAdd) => {
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach((object) => {
      const docRef = doc(collectionRef,object.title.toLowerCase())
      batch.set(docRef, object)
    }) 
    await batch.commit();
   
  }

  export const getCategoriesAndDocument = async ()=>{
    const collectionRef = collection(db,'categories')
    const q = query(collectionRef)

    const querySnapshot =await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc,docSnapshop)=>{
      const {title,items} = docSnapshop.data()
      acc[title.toLowerCase()] = items
      return acc
    },{})
    return categoryMap
  }

  export const createUserDocumentFromAuth = async (
    userAuth, 
    aditionlInformation ={}
    ) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    // console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createDate = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createDate,
                ...aditionlInformation
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
        return userDocRef;
    }


  }


  export const createAuthUserWithEmailAndPassword = async(email,password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const signInAuthUserWithEmailAndPassword = async(email,password) => {
    
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password)
  }

  export const signOutUser = async () => await signOut(auth)

  export const onAuthStateChangedListener =  (callback) => 
  onAuthStateChanged(auth,callback);