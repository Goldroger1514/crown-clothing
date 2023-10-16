import { UserContext } from "../../context/user-context.component"
import { useContext } from "react"
import { Navigate, useSearchParams } from "react-router-dom"
import { selectUser } from "../../redux/user/user.selector"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import Navigation from "../../routes/navigation/navigation.component"
let RequireAuth = ({ children }) => {
  // let { currentUser } = useContext(UserContext)
  let currentUser = useSelector(selectUser)
  // if (!currentUser) {
  //   return <Navigate to='/' />
  // } else
  //   return children
  return children
}
export default RequireAuth