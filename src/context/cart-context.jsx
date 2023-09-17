import { createContext, useState, useEffect } from "react";
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
  let [cartItems, setCartItems] = useState([])
  let [itemsCount, setItemsCount] = useState(0)
  let [cartOpen, setCartOpen] = useState(false)
  let [total, setTotal] = useState(0)
  let addItem = (productToAdd) => {
    setCartItems(addItemToCart(cartItems, productToAdd))
  }
  useEffect(() => {
    let count = cartItems.reduce((acc, elem) => {
      return acc + elem.quantity
    }, 0)
    setItemsCount(count)
  }, [cartItems])
  useEffect(() => {
    let sum = 0
    for (let item of cartItems)
      sum += item.price * item.quantity
    setTotal(sum)
  })
  let remove = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove))
  }
  let incDecQuantity = (productToModify, op) => {
    setCartItems(incDec(cartItems, productToModify, op))
  }
  let value = { cartItems, incDecQuantity, remove, setCartItems, total, addItem, cartOpen, setCartOpen, itemsCount }
  return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}
