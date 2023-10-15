import { Outlet } from "react-router-dom";

function Posts() {
  return (
    <div>
      <h1>List of posts go here!</h1>
      <Outlet />
    </div>
  )
}