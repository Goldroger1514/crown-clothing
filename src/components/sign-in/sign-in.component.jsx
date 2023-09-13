import './sign-in.style.scss'
import { ReactComponent as Logo } from '../../assets/87 - crown.svg'
import { Title, InputLabel } from './sign-in.styles'
import FormInput from '../form-input/form-input.styles'
let SignIn = () => {
  let X = Logo
  return (
    <form>
      <Title>
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>
      </Title>
      <InputLabel>
        <FormInput label='Email' type='email' required />
      </InputLabel>
      <InputLabel>
        <FormInput label='Password' type='password' required />
      </InputLabel>
      <div className='buttons-container'>
        <button>Sign In</button>
        <button>Google Sign In</button>
      </div>
    </form>
  )
}
export default SignIn