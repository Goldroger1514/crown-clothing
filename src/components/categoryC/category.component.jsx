import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../context/categories.context"
import { useContext, useState, useEffect } from "react"
import { CategoryContainer } from "../category-preview/category-preview.styles"
import Product from "../product/product.component"
let CategoryC = () => {
  let { category } = useParams()
  let { categoriesMap } = useContext(CategoriesContext)
  let data = categoriesMap[category]
  return (
    <>
      <h1 >{category.toUpperCase()}</h1>
      < CategoryContainer >
        {
          data.map(product => (
            <Product key={product.id} category={product} />
          ))
        }
      </CategoryContainer >
    </>
  )
}
export default CategoryC