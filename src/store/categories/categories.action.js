import { createAction } from '../../utils/actions/createAction'
import { USER_ACTIONS } from './categories.types'
// export let setCategoriesMap = (categoriesMap) => createAction(USER_ACTIONS.SET_CATEGORIES, categoriesMap)
export let setCategoriesMap = (categoriesArray) => createAction(USER_ACTIONS.SET_CATEGORIES, categoriesArray)