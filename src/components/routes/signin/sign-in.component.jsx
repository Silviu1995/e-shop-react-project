import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase";

const SignIn =() => {
    const logGoogleUsers = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
        
    }
    console.log(logGoogleUsers())
    return(
        <div>
            <button onClick={logGoogleUsers} >Sign in with Google</button>
        </div>
    )
}

export default SignIn; 