import { combineReducers } from "redux";
import { userReducer } from "./user/user-reducer";
import { categoriesReducer } from "./categories/categories-reducer";
/**
 * combineReducers method allows us to create a final big reducer that we can use inside of our store by combining smaller reducers together
 * - It's just something that looks like an object
 */
export let rootReducer = combineReducers({
  //key : value
  //name of the reducer : the reducer function itself
  user: userReducer,
  categories: categoriesReducer
})
/**
 * Our actual final state shape is going to be this object where it got user and then the actual state of the userReducer
 */
/**
 * every single time this combined reducers store object is always a new one whenever any of the inner reducers update
 */