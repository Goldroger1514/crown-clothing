import { createContext, useEffect, useState } from 'react'
import SHOP_DATA from '../shop-data'
import { addCollectionDocuments, getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'
export let CategoriesContext = createContext({
  categoriesMap: {},
  setProducts: () => null
})
export let CategoriesProvider = ({ children }) => {
  let [categoriesMap, setCategoriesMap] = useState({})
  useEffect(() => {
    // addCollectionDocuments('products', SHOP_DATA)
    let handler = async () => {
      let categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    handler()
  }, [])
  let value = { categoriesMap }
  return <CategoriesContext.Provider value={value} >{children}</CategoriesContext.Provider>
}
