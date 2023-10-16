import { USER_ACTIONS } from "./user.types"
let INITIAL_STATE = {
  currentUser: null
}
export let userReducer = (prevState = INITIAL_STATE, action) => {
  let { type, payload } = action
  switch (type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return {
        ...prevState,
        currentUser: payload
      }
    default: return prevState
  }
}