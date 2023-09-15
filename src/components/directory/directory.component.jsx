import CategoryContainer from "../category-container/category-container.component"
import { DirectoryContainer, Category } from "./directory.styles"
let Directory = ({ info }) => {
  return (
    <DirectoryContainer>
      {
        info.map(category => (
          <CategoryContainer key={category.id} category={category} />
        ))
      }
    </DirectoryContainer>
  )
}
export default Directory