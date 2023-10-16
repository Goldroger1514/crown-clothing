import { CART_TYPES } from "./cart.types";
let INITIAL_STATE = {
  cartItems: [],
  itemsCount: 0,
  total: 0,
  cartOpen: false
}
export let cartReducer = (prevState = INITIAL_STATE, action) => {
  let { type, payload } = action
  switch (type) {
    case CART_TYPES.ADD_TO_CART:
      return {
        ...prevState,
        ...payload
      }
    default: return prevState
  }
}