let redux = require('redux')
const { default: thunk } = require('redux-thunk')
let applyMiddleware = redux.applyMiddleware
let thunkMiddleware = require('redux-thunk').default
let axios = require('axios')
let createStore = redux.createStore

let INITIAL_STATE = {
  loading: true,
  data: [],
  error: ''
}
let ACTION_TYPES = {
  FETCH_USERS_REQUEST: 'FETCH_USERS_REQUEST',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE'
}
let actionCreater = (type, payload = []) => ({ type: type, payload: payload })

let reducer = (prevState = INITIAL_STATE, action) => {
  let { type, payload } = action
  switch (type) {
    case ACTION_TYPES.FETCH_USERS_REQUEST:
      return {
        ...prevState,
        loading: true
      }
    case ACTION_TYPES.FETCH_USERS_SUCCESS:
      return {
        users: payload,
        loading: false,
        error: ''
      }
    case ACTION_TYPES.FETCH_USERS_FAILURE:
      return {
        users: [],
        loading: false,
        error: payload
      }
  }
}
let fetchUsers = () => {
  return function (dispatch) {
    dispatch(actionCreater(ACTION_TYPES.FETCH_USERS_REQUEST))//set loading to true
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
      //response.data is the array of users
      let users = response.data.map(user => user.id)
      dispatch(actionCreater(ACTION_TYPES.FETCH_USERS_SUCCESS, users))
    }).catch(error => {
      //error.message is the description of the error
      dispatch(actionCreater(ACTION_TYPES.FETCH_USERS_FAILURE, error.message))
    })
  }
}
let store = createStore(reducer, applyMiddleware(thunkMiddleware))
/**
 * thunkMiddleware allows us to make an action creater that returns a function instead of an action
 * the returned function can now perform side effects such as async tasks
 * also it can dispatch several actions which will be handled by our reducer
 */
let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(fetchUsers())
/**
 * Here's the sequence of events:

store.dispatch(fetchUsers()) is called.
Redux Thunk middleware intercepts the action, recognizes that it's a function, and executes it.
Inside the fetchUsers function, dispatch is used to dispatch actions at various points during 
the asynchronous operation (before and after the Axios request).
These dispatched actions eventually reach the reducer, which updates the state based on the action's type and payload.
In summary, Redux Thunk middleware is responsible for calling the returned function,
and it ensures that the dispatches within that function are processed in
  the correct order and update the state accordingly.
  The dispatch function is automatically passed to the returned function by Redux Thunk middleware 
  when you dispatch an action that is a function. This is part of how Redux Thunk works.
 */