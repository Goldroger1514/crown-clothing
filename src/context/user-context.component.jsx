import { createContext, useState } from "react";
export let UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})
export let UserProvider = ({ children }) => {
  let [currentUser, setCurrentUser] = useState(null)
  let value = { currentUser, setCurrentUser }
  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}