import CategoriesPreview from "../../components/categories-preview/categories-preview.component"
import CategoryC from "../../components/category/category.component"
import { Routes, Route } from 'react-router-dom'
let Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoryC />} />
      <Route path=':category' element={<CategoryC />} />
    </Routes>
  )
}
export default Shop