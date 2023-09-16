import Product from "../product/product.component";
import { CategoryContainer } from './category-preview.styles'
import { Link } from "react-router-dom";
let CategoryPreview = ({ title, category }) => {
  return (
    <>
      <Link to={title} >
        <h1 style={{
          'text-align': 'center'
        }} >{title.toUpperCase()}</h1>
      </Link>
      <CategoryContainer>
        {
          category.filter((_, index) => index < 4).map(product => {
            return <Product key={product.id} category={product} />
          })
        }
      </CategoryContainer>
    </>
  )
}
export default CategoryPreview