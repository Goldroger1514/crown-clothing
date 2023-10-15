import { USER_ACTIONS } from "./user-types"
let INITIAL_STATE = {
  currentUser: null
}
export let userReducer = (currentState = INITIAL_STATE, action) => {
  let { type, payload } = action
  switch (type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: payload
      }
    default:
      return currentState
  }
}
/**
 * - The first thing is that by default , because we no longer have the hook useReducer that initialize the state with (the second argument)
 * - So the reducer knew that the first state is going to be the initial state value
 * - Because we don't have that hook anymore we need to give the currentState a default value statically
 * ----------------------------------------
 * - The other thing that's different is that all of our reducers react to every single action
 * - So as a result by default whenever we don't respond to an action because it's very possible we might get actions where the type has nothing to do with our userReducer
 * - All of our cases are not gonna switch so by default we return back the current state
 * - By doing this , our code knows that this part of my reducer did not change  
 */