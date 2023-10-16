import { CategoriesContext } from "../../context/categories.context"
import { useContext } from "react"
import { Link } from "react-router-dom"
import CategoryPreview from "../category-preview/category-preview.component"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../redux/categories/categories.selector"
let CategoriesPreview = () => {
  // let { categoriesMap } = useContext(CategoriesContext)
  let categoriesMap = useSelector(selectCategoriesMap)
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