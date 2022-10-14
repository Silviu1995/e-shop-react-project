import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase";
import SignUpForm from "../../signup-form/signup-form.component";



const SignIn =() => {
   
    


    const logGoogleUsers = async () => {
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
        
    }
    // const logGoogleRedirect = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user})
        
    // }
   
    return(
        <div>
            <button onClick={logGoogleUsers} >Sign in with Google PopUp</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn; 