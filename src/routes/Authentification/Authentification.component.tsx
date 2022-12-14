
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { AuthContainer } from "./Authentication.style";


const Authentification =() => {
    return(
        <AuthContainer>
            <SignInForm/>
            
            <SignUpForm />
        </AuthContainer>
    )
}
export default Authentification; 