import { useState } from "react"

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

    const handleChange = (event) => { 
        const {name, value} = event.target
        setFormField({ ...formField,[name]: value })
    }
    return(
        <div>
            <h1>sign up with your email</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type="text" onChange={handleChange} required name="displayName" value={displayName} />
                <label>Email</label>
                <input type="email" onChange={handleChange} name="email" value={email} required/>
                <label>Password</label>
                <input type="password" onChange={handleChange} name="password" value={password} required/>
                <label>Confirm Password</label>
                <input type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>
                <button type="submit" >Submit</button>
                
            </form>
        </div>
    )
}

export default SignUpForm