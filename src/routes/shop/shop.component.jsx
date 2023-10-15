import CategoriesPreview from "../../components/categories-preview/categories-preview.component"
import CategoryC from "../../components/categoryC/category.component"
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { addCollectionDocuments, getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategoriesMap } from "../../store/categories/categories.action";
import SHOP_DATA from "../../shop-data"
import { useEffect } from "react"
let Shop = () => {
  let dispatch = useDispatch()
  useEffect(() => {
    let handler = async () => {
      // addCollectionDocuments('products', SHOP_DATA)
      let categories = await getCategoriesAndDocuments()
      // let categories = SHOP_DATA
      dispatch(setCategoriesMap(categories))
    }
    handler()
  }, [])
  return (
    <div className="container">
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<CategoryC />} />
      </Routes>
    </div>
  )
}
export default Shop