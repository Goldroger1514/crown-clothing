import { CATEGORIES_ACTIONS } from "./categories.types"
export let categoryActionCreator = (payload) => ({ type: CATEGORIES_ACTIONS.SET_CATEGORIES_MAP, payload })