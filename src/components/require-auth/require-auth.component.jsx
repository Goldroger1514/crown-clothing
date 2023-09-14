import { UserContext } from "../../context/user-context.component"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import Navigation from "../../routes/navigation/navigation.component"
let RequireAuth = ({ children }) => {
  let { currentUser } = useContext(UserContext)
  console.log(currentUser)
  if (!currentUser) {
    return <Navigate to='/' />
  } else
    return children
}
export default RequireAuth