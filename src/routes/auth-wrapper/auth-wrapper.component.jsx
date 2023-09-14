import { Navigate } from "react-router-dom"
import { Outlet } from "react-router-dom"
let AuthWrapper = ({ children }) => {
  return (
    <>
      <Navigate to='/Authentication' />
      <Outlet />
    </>

  )
}
export default AuthWrapper