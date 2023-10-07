import { createContext, useState, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
let addItemToCart = (cartItems, productToAdd) => {
  let result = cartItems.find(element => {
    return element.id == productToAdd.id
  })
  if (result) {
    return cartItems.map(item => item.id == productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item)
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}
let removeItem = (cartItems, productToRemove) => {
  let index = 0;
  for (let item of cartItems)
    if (item.id == productToRemove.id)
      break;
    else
      index++
  cartItems.splice(index, 1)
  return [...cartItems]
}
let incDec = (cartItems, productToModify, op) => {
  if (productToModify.quantity == 1 && op == 'dec') {
    return removeItem(cartItems, productToModify)
  } else if (op == 'inc') {
    return cartItems.map(item => item.id == productToModify.id ? { ...item, quantity: item.quantity + 1 } : item)
  } else {
    return cartItems.map(item => item.id == productToModify.id ? { ...item, quantity: item.quantity - 1 } : item)
  }
}
let INITIAL_STATE = {
  cartItems: [],
  itemsCount: 0,
  total: 0,
  cartOpen: false
}
let USER_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  MODIFY_CART: 'MODIFY_CART',
  SET_CART_OPEN: 'SET_CART_OPEN'
}
let cartReducer = (currentState, action) => {
  let { type, payload } = action
  switch (type) {
    // case USER_ACTIONS.ADD_TO_CART:
    //   return {
    //     ...currentState,
    //     cartItems: addItemToCart(currentState.cartItems, payload),
    //     cartTotal:,
    //     cartCount:
    //     /**
    //      * Our reducer should not handle any complex calculations
    //      * It only should update the state nothing less nothing more
    //      */
    //   }
    case USER_ACTIONS.ADD_TO_CART:
      return {
        ...currentState,
        ...payload
      }
    case USER_ACTIONS.REMOVE_FROM_CART:
      return {
        ...currentState,
        ...payload
      }
    case USER_ACTIONS.MODIFY_CART:
      return {
        ...currentState,
        ...payload
      }
    case USER_ACTIONS.SET_CART_OPEN:
      return {
        ...currentState,
        cartOpen: payload
      }
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`)
  }
}
// let addToCartAction = (itemToAdd) => {
//   dispatch({ type: 'ADD_TO_CART', payload: itemToAdd })
// }

export let CartContext = createContext({
  cartItems: [],
  setCartItems: () => null,
  itemsCount: 0,
  setItemsCount: () => null,
  cartOpen: false,
  setCartOpen: () => null,
  incDecQuantity: (cartItems, productToModify) => null,
  remove: (productToRemove) => null,
  total: 0,
  setTotal: () => null
})
export let CartProvider = ({ children }) => {
  let [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  let { cartItems, itemsCount, cartOpen, total } = state
  let addItem = (productToAdd) => {
    // setCartItems(addItemToCart(cartItems, productToAdd))
    cartItems = addItemToCart(cartItems, productToAdd)
    updateCartItems(USER_ACTIONS.ADD_TO_CART, cartItems)
  }
  let remove = (productToRemove) => {
    // setCartItems(removeItem(cartItems, productToRemove))
    cartItems = removeItem(cartItems, productToRemove)
    updateCartItems(USER_ACTIONS.REMOVE_FROM_CART, cartItems)
  }
  let incDecQuantity = (productToModify, op) => {
    // setCartItems(incDec(cartItems, productToModify, op))
    cartItems = incDec(cartItems, productToModify, op)
    updateCartItems(USER_ACTIONS.MODIFY_CART, cartItems)
  }
  let setCartOpen = (newStatus) => {
    dispatch({ type: USER_ACTIONS.SET_CART_OPEN, payload: newStatus })
  }
  let updateCartItems = (type, cartItems) => {
    itemsCount = cartItems.reduce((acc, elem) => {
      return acc + elem.quantity
    }, 0)
    // setItemsCount(count)
    let sum = 0
    for (let item of cartItems)
      sum += item.price * item.quantity
    total = sum
    let payload = {
      cartItems,
      itemsCount,
      total
    }
    // dispatch({ type: type, payload: payload })
    dispatch(createAction(type, payload))
  }
  let value = { cartItems, incDecQuantity, remove, total, addItem, cartOpen, setCartOpen, itemsCount }
  return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}
/**
 * The good time to use reducers is when changing one values causes the modification of several other values in the state object
 */