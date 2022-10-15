
import SignUpForm from "../../signup-form/signup-form.component";
import SignInForm from "../../signin-form/signin-form.component";
import './Authentication.style.scss'

const Authentification =() => {
   
    


    // const logGoogleRedirect = async () => {
    //     const {user} = await signInWithGoogleRedirect();
    //     console.log({user})
        
    // }
   
    return(
        <div className="authentication-container">
            <SignInForm/>
            
            <SignUpForm />
        </div>
    )
}

export default Authentification; 