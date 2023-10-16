import { CART_TYPES } from "./cart.types";
let INITIAL_STATE = {
  cartItems: [],
  itemsCount: 0,
  total: 0,
  isCartOpen: false
}
export let cartReducer = (prevState = INITIAL_STATE, action) => {
  let { type, payload } = action
  switch (type) {
    case CART_TYPES.SET_CART_ITEMS:
      return {
        ...prevState,
        cartItems: payload
      }
    case CART_TYPES.SET_IS_CART_OPEN:
      return {
        ...prevState,
        isCartOpen: payload
      }
    default: return prevState
  }
}