import Authentication from "./routes/authentication/authentication.component";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import RequireAuth from "./components/require-auth/require-auth.component";
// import Navigation from "./routes/navigation/navigation.component";
import AuthWrapper from "./routes/auth-wrapper/auth-wrapper.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import React, { useEffect } from "react";
import Navigation from "./routes/navigation/navigation.component";

let App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <Navigation />
        } >
          <Route index element={<Home />} />
          <Route path='/shop/*' element={<Shop />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='Authentication' element={<Authentication />} />
        </Route>
      </Routes>
    </>
  )
}
export default App;
