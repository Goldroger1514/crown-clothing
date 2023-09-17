import { Header, CheckoutItemContainer, Total } from "./checkout.styles"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
let Checkout = () => {
  let { cartItems, total } = useContext(CartContext)
  return (
    <div className="container">
      <Header>
        <p>Product</p>
        <p>Description</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Remove</p>
      </Header>
      <CheckoutItemContainer>
        {
          cartItems.map(product => (
            <CheckoutItem key={product.id} product={product} />
          ))
        }
      </CheckoutItemContainer>
      <Total>Total:{total}$</Total>
    </div>
  )
}
export default Checkout