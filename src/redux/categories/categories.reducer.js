import { CATEGORIES_ACTIONS } from "./categories.types"
let INITIAL_STATE = {
  categoriesMap: {}
}
export let categoriesReducer = (prevState = INITIAL_STATE, action) => {
  let { type, payload } = action
  switch (type) {
    case CATEGORIES_ACTIONS.SET_CATEGORIES_MAP:
      return {
        ...prevState,
        categoriesMap: payload
      }
    default: return prevState
  }
}