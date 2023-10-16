import { CART_TYPES } from "./cart.types";
export let setIsCartOpen = (boolean) => ({ type: CART_TYPES.SET_IS_CART_OPEN, payload: boolean })


let addCartItem = (cartItems, productToAdd) => {
  let existingCartItem = cartItems.find(cartItem => cartItem.id == productToAdd.id)
  if (existingCartItem) {
    return cartItems.map((cartItem) => cartItem.id == productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}
let removeCartItem = (cartItems, cartItemToRemove) => {
  let existingCartItem = cartItems.find(cartItem => cartItem.id == cartItemToRemove.id)
  if (existingCartItem.quantity == 1) {
    return cartItems.filter(cartItem => cartItem.id != cartItemToRemove)
  }
  return cartItems.map(cartItem => cartItem.id == cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}
let clearCartItem = (cartItems, cartItemToClear) => cartItems.filter(cartItem => cartItem.id != cartItemToClear.id)

export let addItemToCart = (cartItems, productToAdd) => {
  let newCartItems = addCartItem(cartItems, productToAdd)
  // updateCartItemsReducer(newCartItems)
  return { type: CART_TYPES.SET_CART_ITEMS, payload: newCartItems }
}
export let removeItemToCart = (cartItems, cartItemToRemove) => {
  let newCartItems = removeCartItem(cartItems, cartItemToRemove)
  // updateCartItemsReducer(newCartItems)
  return { type: CART_TYPES.SET_CART_ITEMS, payload: newCartItems }
}
export let clearItemFromCart = (cartItems, cartItemToClear) => {
  let newCartItems = clearCartItem(cartItems, cartItemToClear)
  // updateCartItemsReducer(newCartItems)
  return { type: CART_TYPES.SET_CART_ITEMS, payload: newCartItems }
}
