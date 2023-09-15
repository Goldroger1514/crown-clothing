import { CategoriesContext } from "../../context/categories.context"
import { useContext } from "react"
let CategoriesPreview = () => {
  let { categoriesMap } = useContext(CategoriesContext)
  return (
    <div className="container">
      <h1>Categories Preview</h1>
    </div>
  )
}
export default CategoriesPreview