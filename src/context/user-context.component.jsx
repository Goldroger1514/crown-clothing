import { createContext, useState, useReducer } from "react";
export let UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})
let INITIAL_STATE = {
  currentUser: null
}
let USER_ACTIONS = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}
let userReducer = (currentState, action) => {
  let { type, payload } = action
  switch (type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: payload
      }
  }
}
export let UserProvider = ({ children }) => {
  // let [currentUser, setCurrentUser] = useState(null)
  let [state, dispatch] = useReducer(userReducer, INITIAL_STATE)
  let { currentUser } = state
  let setCurrentUser = (user) => {
    dispatch({ type: USER_ACTIONS.SET_CURRENT_USER, payload: user })
  }
  let value = { currentUser, setCurrentUser }
  return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}