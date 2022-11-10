
import { useState } from "react"
import {  signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"
import FromInput from "../form-input/form-input.component"
import { ButtonsContainer, SignInContainer } from "./signin-form.style"
// import Button from "../button/button.component"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"

const defaultFormFields = {
 
    email: '',
    password: ''

}

const SignInForm = () => {

    const [formField, setFormField] = useState(defaultFormFields)
    const {email, password } = formField
    
  

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(email,password)
            clearFields();   
        } 
       
        catch(error) {
            switch (error.code) {
                case  'auth/wrong-password':
                alert('Wrong email and password');
                break;
                case  'auth/user-not-found':
                alert('User not found')
                break;
                default:
                console.log('catch an error', error);   
            }  

            
        }
    }

    const clearFields = () => {
        setFormField(defaultFormFields)
    }
    
    const signInWithGoogle = async () => {
         await signInWithGooglePopup();
        
        
    }

    const handleChange = (event) => { 
        const {name, value} = event.target
        setFormField({ ...formField,[name]: value })
    }



    return(
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={ handleSubmit}>
               
               
              
                <FromInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>
                
                <FromInput label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
                
               <ButtonsContainer>
                 <Button  type="submit" >sign in</Button>
                
                 <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google}  onClick={signInWithGoogle} >Google sign in</Button>
               </ButtonsContainer>
               
            </form>
        </SignInContainer>
    )
}

export default SignInForm;