import Authentication from "./routes/authentication/authentication.component";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import RequireAuth from "./components/require-auth/require-auth.component";
// import Navigation from "./routes/navigation/navigation.component";
import AuthWrapper from "./routes/auth-wrapper/auth-wrapper.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import { CategoriesProvider } from "./context/categories.context";
import Checkout from "./routes/checkout/checkout.component";
import React from "react";
let LazyNavigation = React.lazy(() => {
  return import("./routes/navigation/navigation.component");
})
let App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<AuthWrapper />} >
          <Route path='/Authentication' element={<Authentication />} />
        </Route>
        <Route path='/home' element={
          <React.Suspense fallback='Loading...' >
            <RequireAuth>
              <LazyNavigation />
            </RequireAuth>
          </React.Suspense>} >
          <Route index element={<Home />} />
          <Route path='/home/shop/*' element={<Shop />} />
          <Route path='/home/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  )
}
export default App;
