import Authentication from "./routes/authentication/authentication.component";
import './App.css'
import { Routes, Route } from 'react-router-dom'
import RequireAuth from "./components/require-auth/require-auth.component";
// import Navigation from "./routes/navigation/navigation.component";
import AuthWrapper from "./routes/auth-wrapper/auth-wrapper.component";
import React from "react";
let LazyNavigation = React.lazy(() => {
  return import("./routes/navigation/navigation.component");
})
let App = () => {
  return (
    <Routes>
      <Route path="" element={<AuthWrapper />} >
        <Route path='Authentication' element={<Authentication />} />
      </Route>
      <Route path='/home' element={
        <React.Suspense fallback='Loading...' >
          <RequireAuth>
            <LazyNavigation />
          </RequireAuth>
        </React.Suspense>} >
      </Route>
    </Routes>
  )
}
export default App;
