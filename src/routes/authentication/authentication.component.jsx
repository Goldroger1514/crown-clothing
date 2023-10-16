import { AuthenticationContainer, FormContainer } from "./authentication.styles"
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"
import { useNavigate } from "react-router"
let Authentication = () => {
  return (
    <AuthenticationContainer>
      <FormContainer>
        <SignIn />
        <SignUp />
      </FormContainer>
    </AuthenticationContainer>
  )
}
export default Authentication