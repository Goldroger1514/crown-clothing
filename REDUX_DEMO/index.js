let redux = require('redux')
let createStore = redux.createStore
let combineReducers = redux.combineReducers

let reduxLogger = require('redux-logger')
let applyMiddleware = redux.applyMiddleware
let logger = reduxLogger.createLogger()

let BUY_CAKE = 'BUY_CAKE'
let BUY_ICE_CREAM = 'BUY_ICE_CREAM'
//action creater is a function that return an action
let buyCake = () => ({ type: BUY_CAKE, payload: 'First Redux Action' })
let buyIceCream = () => ({ type: BUY_ICE_CREAM, payload: 'First Redux Action' })
//(prevState,action)=>newState
let INITIAL_STATE = {
  numberOfCakes: 10,
  numberOfIceCreams: 10
}
let reducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...prevState,
        numberOfCakes: prevState.numberOfCakes - 1
      }
    case BUY_ICE_CREAM:
      return {
        ...prevState,
        numberOfIceCreams: prevState.numberOfIceCreams - 1
      }
    default: return prevState
  }
  /**
   * This approach of using just one reducer definetly works
   * But in the long term , when we have several products to sell
   * we're gonna have this one huge reducer function that is difficult to debug , manage and keep track of
   * ##
   * So we split our state into two (sicne we have two properties)
   * And we make a reducer for each state
   */
}
let INITIAL_CAKE_STATE = {
  numOfCakes: 10
}
let cakesReducer = (prevState = INITIAL_CAKE_STATE, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...prevState,
        numOfCakes: prevState.numOfCakes - 1
      }
    default: return prevState
  }
}
let INITIAL_ICE_CREAM_STATE = {
  numOfIceCreams: 10
}
let icecreamReducer = (prevState = INITIAL_ICE_CREAM_STATE, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...prevState,
        numOfIceCreams: prevState.numOfIceCreams - 1
      }
    default: return prevState
  }
}

// let store = createStore(reducer)
let rootReducer = combineReducers({
  cake: cakesReducer,
  icecream: icecreamReducer
})
let store = createStore(rootReducer, applyMiddleware(logger))
/**
 * reducer accpeted as argument in createStore method
 * the reducer function has the initial state of our application
 * this is required for the store to make state transitions based on the action receieved
 * the reducer function controls how the state transition happens
 * ----------------
 * The createStore method only accepts one reducer
 * So how do we let redux to know about all of our reducers
 * We use method called combineReducers 
 * this method accepts an object
 * each key-value pair corresponds to the reducer
 * -------------
 * Now when we dispatch an action , both reducers receives that action
 */
console.log('Initial state:', store.getState())//get initial state

// allowing the app to subscribe to changes made in the store (subscribe method)
let unsubscribe = store.subscribe(() => {
  // console.log('Updated state:', store.getState())
})
//dispatch method to update the state
console.log('----------')
store.dispatch(buyCake())
console.log('----------')
store.dispatch(buyCake())
console.log('----------')
store.dispatch(buyCake())
console.log('----------')
store.dispatch(buyIceCream())
console.log('----------')
store.dispatch(buyIceCream())
console.log('----------')
// unsubscribe from the store
unsubscribe()