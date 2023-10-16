import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../context/categories.context"
import { useContext, useState, useEffect } from "react"
import { CategoryContainer } from "../category-preview/category-preview.styles"
import Product from "../product/product.component"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../redux/categories/categories.selector"
let CategoryC = () => {
  console.log('render/rerendered CategoryC component')
  let { category } = useParams()
  // let { categoriesMap } = useContext(CategoriesContext)
  let categoriesMap = useSelector(selectCategoriesMap)
  // let data = categoriesMap[category]
  let [products, setProducts] = useState(categoriesMap[category])
  useEffect(() => {
    console.log('Effect fired calling setProducts')
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])
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
/**
 * Whenever the rootReducer updates any of the inner reducers values 
 * the entire store object is giong to be a new store object
 * So while with the SET_CURRENT_USER the userReducer is a new object 
 * categoryReducer returns the old state object
 * So the categoryReducer is the same one in memory
 * ----------------
 * Every single time this combinedReducers store object is always a new one whenever any reducer updates
 * This is why despite the fact that currentUser is the value that's getting set inside the user
 * Our selectCategory function is still getting rerun and the reason for this is 
 * useSelector as a hook is literally hooked into the redux store
 * and whenever an action comes in , this will refire the selector
 * --------------
 * Whenever any action fires and as long as the reducer updates , it does not matter which part of the reducer you're listening to
 * Every single component that has a useSelector will rerun
 */

/**
 *  Component (dispatch an action)=> middleware (does something with that action and calls next)=> action passed to the next middleware or reducers
 */
