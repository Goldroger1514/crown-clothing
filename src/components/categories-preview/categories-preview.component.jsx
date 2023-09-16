import { CategoriesContext } from "../../context/categories.context"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CategoryPreview from "../category-preview/category-preview.component"
let CategoriesPreview = () => {
  let { categoriesMap } = useContext(CategoriesContext)
  return (
    <>
      {
        Object.keys(categoriesMap).map(key => {
          return <CategoryPreview key={key} title={key} category={categoriesMap[key]} />
        })
      }
    </>
  )
}
export default CategoriesPreview