
import SignUpForm from "../../signup-form/signup-form.component";
import SignInForm from "../../signin-form/signin-form.component";
import { AuthContainer } from "./Authentication.style";


const Authentification =() => {
   
    


    // const logGoogleRedirect = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user})
        
    // }
   
    return(
        <AuthContainer>
            <SignInForm/>
            
            <SignUpForm />
        </AuthContainer>
    )
}

export default Authentification; 