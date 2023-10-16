import { createSelector } from 'reselect'

let selectCartReducer = state => state.cart

export let selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => {
    return cart.cartItems
  }
)

export let selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => {
    return cart.isCartOpen
  }
)

export let selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    let newCartCount = cartItems.reduce(
      (total, cartItem) => {
        return total + cartItem.quantity
      }
      , 0)
    return newCartCount
  }
)

export let selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    let newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem, 0
    )
    console.log(newCartTotal)
    return newCartTotal
  }
)
