import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
export let rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer
})