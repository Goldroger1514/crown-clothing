import './sign-in.style.scss'
import { ReactComponent as Logo } from '../../assets/87 - crown.svg'
import { Title, InputLabel } from './sign-in.styles'
import FormInput from '../form-input/form-input.styles'
import { useState } from 'react'
import Button from '../button/button.component'
import { signInWithGooglePopup, signInUser, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
let defaultFields = {
  email: '',
  password: ''
}
let SignIn = () => {
  let X = Logo
  let [fields, setFields] = useState(defaultFields)
  let { password, email } = fields
  let onInputChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value })
  }
  let signInGoogle = async () => {
    try {
      let response = await signInWithGooglePopup()
      let userAuth = response.user
      if (userAuth.uid) {
        let userDocRef = await createUserDocumentFromAuth(userAuth)
        setFields(defaultFields)
      }
    } catch (error) {

    }
  }
  let signIn = async () => {
    try {
      let response = await signInUser(email, password)
      setFields(defaultFields)
    } catch (error) {

      console.log(error)
    }
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
    }} >
      <Title>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
      </Title>
      <InputLabel>
        <FormInput label='Email' value={email} name='email' onChange={onInputChange} type='email' required />
      </InputLabel>
      <InputLabel>
        <FormInput label='Password' value={password} name='password' onChange={onInputChange} type='password' required />
      </InputLabel>
      <div className='buttons-container'>
        <Button onClick={signIn} type='base' >Sign In</Button>
        <Button onClick={signInGoogle} type='google' >Google Sign In</Button>
      </div>
    </form>
  )
}
export default SignIn