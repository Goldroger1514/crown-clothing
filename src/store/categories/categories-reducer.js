import { USER_ACTIONS } from './categories.types'
export let INITIAL_STATE = {
  categoriesMap: {},
  categoriesArray: []
}
export let categoriesReducer = (currentState = INITIAL_STATE, action) => {
  let { type, payload } = action
  switch (type) {
    case USER_ACTIONS.SET_CATEGORIES:
      return { ...currentState, categoriesArray: payload }
    default:
      return currentState
  }
}