import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/user-context.component"
let Navigation = () => {
  let { currentUser } = useContext(UserContext)
  return (
    <>
      <h1>Hello , i am the navigation page</h1>
      <Link to='/' >SignOut</Link>
    </>
  )
}
export default Navigation