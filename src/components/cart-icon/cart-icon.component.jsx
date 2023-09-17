import { useContext } from 'react'
import { ReactComponent as CartImg } from '../../assets/cart-icon.svg'
import { IconContainer } from './cart-icon.styles'
import { CartContext } from '../../context/cart-context'
let CartIcon = () => {
  let { itemsCount, setCartOpen, cartOpen } = useContext(CartContext)
  return (
    <IconContainer onClick={() => {
      setCartOpen(!cartOpen)
    }} >
      <CartImg />
      <span>{itemsCount}</span>
    </IconContainer>
  )
}
export default CartIcon