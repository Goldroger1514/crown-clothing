import CategoriesPreview from "../../components/categories-preview/categories-preview.component"
import CategoryC from "../../components/categoryC/category.component"
import { Routes, Route } from 'react-router-dom'
let Shop = () => {
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