import Authentication from "./routes/authentication/authentication.component";
import './App.css'
import { Routes, Route } from 'react-router-dom'
let App = () => {
  return (
    <Routes>
      <Route path="/" element={<Authentication />} />
    </Routes>
  )
}
export default App;
