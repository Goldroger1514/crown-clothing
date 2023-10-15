import { UserContext } from "../../context/user-context.component"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
import Navigation from "../../routes/navigation/navigation.component"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
/**
 * A hook that allows to interact from a component with the redux store
 * useSelector is a hook that we pass a selector function 
 * A selector function is something that essentially extracts off the values that you want from the whole entire redux store
 * ---
 * The state is as we mentioned a one big object ({... all state of each reducer})
 */
let RequireAuth = ({ children }) => {
  // let { currentUser } = useContext(UserContext)
  let currentUser = useSelector(selectCurrentUser)
  if (!currentUser) {
    return <Navigate to='/' />
  } else
    return children
}
export default RequireAuth