import { Category } from "../directory/directory.styles"
import { BackgroundImage, Info } from './category.styles'
import { Link } from "react-router-dom"
let CategoryContainer = ({ category }) => {
  return (
    <Category className={category.id <= 3 ? 'three' : 'two'} >
      <BackgroundImage src={category.imageUrl} />
      <Link to={category.route} >
        <Info>
          <h3>{category.title.toUpperCase()}</h3>
          <p>SHOP NOW</p>
        </Info>
      </Link>
    </Category>
  )
}
export default CategoryContainer