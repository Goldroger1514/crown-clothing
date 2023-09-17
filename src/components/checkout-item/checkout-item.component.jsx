import { useContext } from "react"
import { CartContext } from "../../context/cart-context"
import { ItemContainer, ItemImage, ItemQuantity } from "./checkout-item.styles"
let CheckoutItem = ({ product }) => {
  let { remove, incDecQuantity } = useContext(CartContext)
  let handleRemove = () => remove(product)
  return (
    <ItemContainer>
      <ItemImage src={product.imageUrl} />
      <span className="description">{product.name}</span>
      <ItemQuantity>
        <span className="dec" onClick={() => {
          incDecQuantity(product, 'dec')
        }} >&lt;</span>
        <span className="quantity">{product.quantity}</span>
        <span className="inc" onClick={() => {
          incDecQuantity(product, 'inc')
        }}>&gt;</span>
      </ItemQuantity>
      <span className="price">{product.price}$</span>
      <span className="remove" onClick={handleRemove} >X</span>
    </ItemContainer>
  )
}
export default CheckoutItem