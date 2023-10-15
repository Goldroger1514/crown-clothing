import { createAction } from "../../utils/actions/createAction"
import { USER_ACTIONS } from "./user-types"
export let setCurrentUser = (user) => createAction(USER_ACTIONS.SET_CURRENT_USER, user)