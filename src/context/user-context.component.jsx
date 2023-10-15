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
//starting redux
/**
 * redux library : allows us to interact with the reducers that produce the root reducer which produce the store
 * react-redux library: gives us all the react bindings so that we can dispatch and pull these store values off of redux
 * redux-logger: tool that helps us understand how actions are firing and what's happening with our state
 */
/**
 * We need to think of what redux replaces
 * - Most of the times we don't want to use Context API and Redux at the same time
 * - Because what userContext for example stores can be stored by Redux 
 * - In redux , all of our state is stored in one place (The redux store)
 * -----------------------------------------
 * - The store folder is going to contain all of our redux code 
 */