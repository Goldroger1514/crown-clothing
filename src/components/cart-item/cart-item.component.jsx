import { CartItemContainer, CartImage, CartInfo } from './cart-item.styles'

let CartItem = ({ info }) => {
  return (
    <CartItemContainer>
      <CartImage src={info.imageUrl} />
      <CartInfo>
        <span className="title">{info.name}</span>
        <span className="quantity">{info.quantity}x{info.price}$</span>
      </CartInfo>
    </CartItemContainer>
  )
}
export default CartItem