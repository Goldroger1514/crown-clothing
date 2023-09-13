import { Title, InputLabel } from '../sign-in/sign-in.styles'
import FormInput from '../form-input/form-input.styles'
let SignUp = () => {
  return (
    <form>
      <Title>
        <h2>Don't have an account?</h2>
        <p>Sign up with your email and password</p>
      </Title>
      <InputLabel>
        <FormInput label='Name' name='displayName' type='text' required />
      </InputLabel>
      <InputLabel>
        <FormInput label='Email' name='email' type='email' required />
      </InputLabel>
      <InputLabel>
        <FormInput label='Password' name='password' type='password' required />
      </InputLabel>
      <InputLabel>
        <FormInput label='Password' name='confirmPassword' type='password' required />
      </InputLabel>
      <div className='buttons-container'>
        <button>Sign Up</button>
      </div>
    </form>
  )
}
export default SignUp