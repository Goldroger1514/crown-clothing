import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { rootReducer } from './root-reducer'
/**
 * This store is a combined place where all of our redux happens 
 * - Where our state lives and where we receive actions and we dispatch them into our reducers to update the state
 * - We need this file because inside is where we're going to generate the store object that we will use inside of our react app
 * ---------------------------------------------
 * In order for this store to work , we need reducers
 * - These reducers are what allow us to actually form the state object
 * - So what we know is that we need something called a root reducer
 * - The root reducer is the combination of all of our reducers
 * - It's kind of like one big reducer , if we want to think about our state being composed of multiple reducers
 */
// let logger = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action)
//   }
//   console.log('type ', action.type)
//   console.log('payload ', action.payload)
//   console.log('currentState ', store.getState())
//   next(action)
//   console.log('next state ', store.getState())
// }
//middlewares
let middlewares = [logger]
let composedEnhancers = compose(applyMiddleware(...middlewares))//it enhance our store
// root-reducer
// export let store = createStore(rootReducer, undefined, middlewares)//rootReducer,additional default state,logger
export let store = createStore(rootReducer, undefined, composedEnhancers)//rootReducer,additional default state,logger
/**
 * - We need a root reducer in order to generate the store
 * - This store is just in order to facilitate the movement and passing of actions through these reducers inside of the root reducer
 * ------------------------------------------
 * - The logger is essentially something that allows us to see what the state looks like before an action is dispatched
 * - What the action is
 * - How the state in turn looks after the action
 * ------------------------------------------
 * - Middlewares are kind of little library helper that run before an action hits the reducer
 * - So whenever we dispatch an action , before that action hits the reducers , it hits the middleware first
 */