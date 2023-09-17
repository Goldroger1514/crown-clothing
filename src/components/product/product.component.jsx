import { Link } from "react-router-dom"
import { ProductImg, ProductCart, ProductInfo, ProductBtnContainer } from "./product.style"
import Button from '../button/button.component'
import { CartContext } from "../../context/cart-context"
import { useContext } from "react"
let Product = ({ category }) => {
  let { addItem } = useContext(CartContext)
  let clickHandler = () => {
    addItem(category)
  }
  return (
    <ProductCart>
      <ProductImg src={category.imageUrl} />
      <ProductInfo>
        <span className="title">{category.name}</span>
        <span className="price">{category.price}$</span>
      </ProductInfo>
      <ProductBtnContainer>
        <Button onClick={clickHandler} type={'inverted'} >Add product to cart</Button>
      </ProductBtnContainer>
    </ProductCart>
  )
}
export default Product