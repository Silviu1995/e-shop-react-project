
import { useState, useContext } from "react"
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase"
import FromInput from "../form-input/form-input.component"
import './signin-form.style.scss'
// import Button from "../button/button.component"
import Button from "../button/button.component"
import { UserContext } from "../../contexts/user.contexts"
const defaultFormFields = {
 
    email: '',
    password: ''

}

const SignInForm = () => {

    const [formField, setFormField] = useState(defaultFormFields)
    const {email, password } = formField
    
    const{setCurrentUser} = useContext(UserContext)

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email,password)
        setCurrentUser(user); 
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
        const {user} = await signInWithGooglePopup();
        createUserDocumentFromAuth(user)
        
    }

    const handleChange = (event) => { 
        const {name, value} = event.target
        setFormField({ ...formField,[name]: value })
    }



    return(
        <div className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={ handleSubmit}>
               
               
              
                <FromInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>
                
                <FromInput label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
                
               <div className="buttons-container">
                 <Button  type="submit" >sign in</Button>
                
                 <Button type="button" buttonType='google'  onClick={signInWithGoogle} >Google sign in</Button>
               </div>
               
            </form>
        </div>
    )
}

export default SignInForm;