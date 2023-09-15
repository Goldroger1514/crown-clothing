import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/user-context.component"
import { Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/87 - crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils"
import './navigation.styles.scss'
let Navigation = () => {
  let { currentUser, setCurrentUser } = useContext(UserContext)
  let handleSignOut = async () => {
    await signOutUser()
    setCurrentUser(null)
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link to='/home' >
              <CrownLogo />
            </Link>
          </div>
          <nav>
            <Link to='shop' >Shop</Link>
            <Link to='/Authentication' onClick={signOutUser} >Sign Out</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}
export default Navigation