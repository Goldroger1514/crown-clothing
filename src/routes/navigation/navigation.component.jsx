import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/user-context.component"
import { CartContext } from "../../context/cart-context"
import { Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from '../../assets/87 - crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import { setCurrentUser } from "../../store/user/user.action"
import './navigation.styles.scss'
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
let Navigation = () => {
  // let { currentUser } = useContext(UserContext)
  let currentUser = useSelector(selectCurrentUser)
  let dispatch = useDispatch()
  let { cartOpen } = useContext(CartContext)
  let handleSignOut = async () => {
    await signOutUser()
    dispatch(setCurrentUser(null))
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link to='/' >
              <CrownLogo />
            </Link>
          </div>
          <nav>
            <Link to='shop' >Shop</Link>
            <Link to='Authentication' onClick={handleSignOut} >{!currentUser ? 'Sign In' : 'Sign Out'}</Link>
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