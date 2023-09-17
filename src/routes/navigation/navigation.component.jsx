import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/user-context.component"
import { CartContext } from "../../context/cart-context"
import { Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/87 - crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import './navigation.styles.scss'
let Navigation = () => {
  let { currentUser, setCurrentUser } = useContext(UserContext)
  let { cartOpen } = useContext(CartContext)
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
            <div className="icon-container">
              <CartIcon />
            </div>
            {cartOpen && <CartDropdown />}
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  )
}
export default Navigation