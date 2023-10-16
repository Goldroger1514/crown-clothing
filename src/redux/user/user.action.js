import { USER_ACTIONS } from "./user.types";
export let userActionCreator = (payload) => ({ type: USER_ACTIONS.SET_CURRENT_USER, payload })