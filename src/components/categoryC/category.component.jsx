import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../context/categories.context"
import { useContext, useState, useEffect } from "react"
import { CategoryContainer } from "../category-preview/category-preview.styles"
import Product from "../product/product.component"
import { useSelector } from "react-redux"
import { selectCategories } from "../../store/categories/categories.selector"
let CategoryC = ({ categoriesMap }) => {
  console.log('render/re-rendering category component')
  let { category } = useParams()
  let categories = useSelector(selectCategories)
  let [products, setProducts] = useState(categories[category])
  useEffect(() => {
    console.log('effect fired calling setProducts')
    setProducts(categories[category])
  }, [category, categories])
  return (
    <>
      <h1 >{category.toUpperCase()}</h1>
      < CategoryContainer >
        {
          products && products.map(product => (
            <Product key={product.id} category={product} />
          ))
        }
      </CategoryContainer >
    </>
  )
}
export default CategoryC