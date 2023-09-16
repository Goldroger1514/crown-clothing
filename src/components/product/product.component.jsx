import { Link } from "react-router-dom"
import { ProductImg, ProductCart, ProductInfo, ProductBtnContainer } from "./product.style"
import Button from '../button/button.component'
let Product = ({ category }) => {
  return (
    <ProductCart>
      <ProductImg src={category.imageUrl} />
      <ProductInfo>
        <span className="title">{category.name}</span>
        <span className="price">{category.price}$</span>
      </ProductInfo>
      <ProductBtnContainer>
        <Button type={'inverted'} >Add product to cart</Button>
      </ProductBtnContainer>
    </ProductCart>
  )
}
export default Product