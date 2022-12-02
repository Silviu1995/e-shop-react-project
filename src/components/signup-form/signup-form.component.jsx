
import { useState } from "react"
import FromInput from "../form-input/form-input.component"
import './sign-up.style.jsx'
import Button from "../button/button.component"
import { SignUpContainer } from "./sign-up.style.jsx"
import { useDispatch } from "react-redux"
import { signUpStart } from "../../store/user/user.action"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}



const SignUpForm = () => {
    
    const [formField, setFormField] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formField
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(password !== confirmPassword) {
            alert('pasword does not match')
            return ;
        }
        try {
            dispatch(signUpStart(email,password,displayName))
           
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
        <SignUpContainer>
            <h2>Don't have an account ?</h2>
            <span>Sign up with your email</span>
            <form onSubmit={ handleSubmit}>
               
                <FromInput label="Display Name" type="text" onChange={handleChange} required name="displayName" value={displayName} />
              
                <FromInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>
                
                <FromInput label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
                
                <FromInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>
                <Button  type="submit" >sign up</Button>
                
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm