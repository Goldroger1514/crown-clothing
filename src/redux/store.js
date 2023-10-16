import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
// let loggerMiddleware = (store) => (next) => (action) => {
//   //next method allows us to pass on the action
//   if (!action.type) {
//     return next(action)
//   }
//   console.log('---')
//   console.log('type: ', action.type)
//   console.log('payload: ', action.payload)
//   console.log('currentState: ', store.getState())
//   next(action)
//   console.log('next state:', store.getState())
//   console.log('---')
// }
let middlewares = [logger]
export let store = createStore(rootReducer, applyMiddleware(...middlewares))