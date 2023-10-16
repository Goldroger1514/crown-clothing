import { CartDropDownContainer, CartDropDown } from "./cart-dropdown.styles"
import Button from "../button/button.component"
import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../redux/cart/cart.selector"
import CartItem from "../cart-item/cart-item.component"
let CartDropdown = () => {
  let navigate = useNavigate()
  // let { cartItems } = useContext(CartContext)
  let cartItems = useSelector(selectCartItems)
  return (
    <CartDropDownContainer>
      <CartDropDown>
        {
          cartItems.length > 0 ?
            cartItems.map(item => {
              return <CartItem key={item.id} info={item} />
            })
            : <p>Your card is empty</p>
        }
      </CartDropDown>
      <Button onClick={() => {
        navigate('/home/checkout')
      }} >Go To Checkout</Button>
    </CartDropDownContainer>
  )
}
export default CartDropdown