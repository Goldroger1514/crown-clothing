import { useContext } from 'react'
import { ReactComponent as CartImg } from '../../assets/cart-icon.svg'
import { IconContainer } from './cart-icon.styles'
import { CartContext } from '../../context/cart-context'
import { setIsCartOpen } from '../../redux/cart/cart.action'
import { selectCartCount, selectIsCartOpen } from '../../redux/cart/cart.selector'
import { useSelector, useDispatch } from 'react-redux'
let CartIcon = () => {
  // let { itemsCount, setCartOpen, cartOpen } = useContext(CartContext)
  let itemsCount = useSelector(selectCartCount)
  let cartOpen = useSelector(selectIsCartOpen)
  let dispatch = useDispatch()
  return (
    <IconContainer onClick={() => {
      dispatch(setIsCartOpen(!cartOpen))
    }} >
      <CartImg />
      <span>{itemsCount}</span>
    </IconContainer>
  )
}
export default CartIcon