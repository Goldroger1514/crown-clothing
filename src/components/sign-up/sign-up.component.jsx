import { Title, InputLabel } from '../sign-in/sign-in.styles'
import FormInput from '../form-input/form-input.styles'
import { useState } from 'react'
import Button from '../button/button.component'
import { createUser, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
let defaultFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
let SignUp = () => {
  let [fields, setFields] = useState(defaultFields)
  let { displayName, email, password, confirmPassword } = fields
  let onInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }
  let handleSubmit = async () => {
    try {
      let response = await createUser(email, password)
      let userAuth = response.user
      if (userAuth.uid) {
        let userDocRef = await createUserDocumentFromAuth(userAuth, displayName)
        setFields(defaultFields)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      handleSubmit()
    }} >
      <Title>
        <h2>Don't have an account?</h2>
        <p>Sign up with your email and password</p>
      </Title>
      <InputLabel>
        <FormInput label='Name' value={displayName} onChange={onInputChange} name='displayName' type='text' required />
      </InputLabel>
      <InputLabel>
        <FormInput label='Email' value={email} onChange={onInputChange} name='email' type='email' required />
      </InputLabel>
      <InputLabel>
        <FormInput label='Password' value={password} onChange={onInputChange} name='password' type='password' required />
      </InputLabel>
      <InputLabel>
        <FormInput label='Confirm Password' value={confirmPassword} onChange={onInputChange} name='confirmPassword' type='password' required />
      </InputLabel>
      <div className='buttons-container'>
        <Button type='base' >Sign Up</Button>
      </div>
    </form>
  )
}
export default SignUp