import CategoriesPreview from "../../components/categories-preview/categories-preview.component"
import CategoryC from "../../components/categoryC/category.component"
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { createContext, useEffect, useState } from 'react'
import SHOP_DATA from "../../shop-data"
import { addCollectionDocuments, getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { categoryActionCreator } from "../../redux/categories/categories.action"
let Shop = () => {
  let dispatch = useDispatch()
  useEffect(() => {
    // addCollectionDocuments('products', SHOP_DATA)
    let handler = async () => {
      let categoryMap = await getCategoriesAndDocuments()
      // setCategoriesMap(categoryMap)
      dispatch(categoryActionCreator(categoryMap))
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