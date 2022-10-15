import { async } from "@firebase/util"
import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase"
import FromInput from "../form-input/form-input.component"
import './sign-up.style.scss'
import Button from "../button/button.component"
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formField, setFormField] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formField
    console.log(formField);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(password !== confirmPassword) {
            alert('pasword does not match')
            return ;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
            await createUserDocumentFromAuth(user, {displayName})
            clearFields();
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('email and password already in use')
            } else console.log('catch an error', error);
            
        }
    }

    const clearFields = () => {
        setFormField(defaultFormFields)
    }

    const handleChange = (event) => { 
        const {name, value} = event.target
        setFormField({ ...formField,[name]: value })
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>Sign up with your email</span>
            <form onSubmit={ handleSubmit}>
               
                <FromInput label="Display Name" type="text" onChange={handleChange} required name="displayName" value={displayName} />
              
                <FromInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>
                
                <FromInput label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
                
                <FromInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>
                <Button  type="submit" >sign up</Button>
                
            </form>
        </div>
    )
}

export default SignUpForm