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
import { selectUser } from "../../redux/user/user.selector"
import { useSelector, useDispatch } from "react-redux"
import { userActionCreator } from "../../redux/user/user.action"
import { selectIsCartOpen } from "../../redux/cart/cart.selector"
let Navigation = () => {
  // let { currentUser, setCurrentUser } = useContext(UserContext)
  let currentUser = useSelector(selectUser)
  let dispatch = useDispatch()
  // let { cartOpen } = useContext(CartContext)
  let cartOpen = useSelector(selectIsCartOpen)
  let handleSignOut = async () => {
    await signOutUser()
    // setCurrentUser(null)
    dispatch(userActionCreator(null))
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
            <Link to='/Authentication' onClick={handleSignOut} >Sign Out</Link>
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