Redux
1- Is a library for JavaScript applications , redux is not tied to react{
  can be used with react,angular,vue or even with vanilla javascript
}
2- Redux is a state container {
  1- Redux store the state of my application
  2- State of an app is the state represented by all the individual components of that app
  {
    #LoginFormComponent:
    state={
      username='',
      password='',
      submitting:false
    }
    #UserListComponent:
    state={
      users:[]
    }
    #Application:
    state={
      isUserLoggedIn:true,
      username:'Vishwas',
      profileUrl:'',
      onlineUsers:[],
      isModalOpened:false
    }
  }
}
3- Redux is predictable{
  - Redux is a state container
  - The state of the application can change
  ## Example
  todo list app - item (pending) => item (completed)
  - In redux, all state transitions are explicit and it is possible to keep track of them 
  - The changed to your application's state become predictable
}
4- Why react + redux?{
  Components in react have their own state
  Why do we need an another tool to help manage that state
  ## Example of a state in a react app
  {
              <App/>
      <E/>                <F/>
  <C/>    <D/>       <X/>          <X/>
<A/> <B/>                       <X/>   <G/>
  }
  let's take component A , this componnet has a input field that accept the usersname which is stored locally within the component state
  And component B which is it's sibling needs to display that name , how do we send the name from A to B?
  We have to do it by react way which is by lifting the component state to Component C , which then provides methods and data as props to A and B
  ----
  What if now Component D also needs to display the name
  The solution again is we have to lift the component state to their parent which is component E
  ----
  Do we really have a problem?
  We have react context which prevent props drilling
  --
  Redux 1.0 - august 2015
  --
   React -> UI library (to build user interfaces)
   Redux -> State management library
   -
   They both work independantly of each other
   So we have react-redux package , the offical redux UI binding library for each{
    Offers a couple of functions that helps us to connect our react app to redux
   }
}
---------------------------------------------
## Three core concepts
----------------------
# Scenario{
                        CakeShop
  Entities:{
    Shop - Stores cakes on a shelf
    ShopKeeper - At the from of the store
    Customer - At the store entrance
  }
  Activities:{
    Customer - Buy a cake
    ShopKeeper - Remove a cake from the shelf and give it to you 
               - Receipt to keep track
  }
}
CakeShop => is the store in redux => it's purpose is to hold the state of our application (our shop safely keeps the cakes on the shelf)

Intention to BUY_CAKE=> is the action in redux => it's purpose is to describe what happened

ShopKeeper => Reducers => it's purpose is to tie the store and actions together{
  1- Receives the action buy from the customer
  2- Removes the cake from the shelf (the store)
}
A store that holds the state of our application
An action which describes the changes in the state of the application
A reducer which actually carries out the state stransition depending on the action
---------------------------------------------
## Three core concepts
----------------------
- First principle
The state of your whole application is stored in an object tree within a single store
## Maintain our application state in a single object which would be managed by the redux store
CakeShop:{
  numberOfCakes:10
}

- Second principle
The only way to change the state is to emit an action , an object describing what happened
## To update the state of your app , you need to let redux know about that with an action (Not allowed to directly update the state object)
For example we are not allowed to directly take the cake from the shelf , we have to let the shop keaper know about our action (BUY_CAKE)
{
  type:BUY_CAKE,
}

- Third principle
To specify how the state tree is transformed by actions , you write pure reducers
## Reducer - (currentState,action) => newState
Reducer is the shopkeeper
let reducer=(currentState,action)=>{
  switch(action.type){
    case BUY_CAKE:return{
      numOfCakes:currentState.numOfCakes-1
    }
  }
}

#
Js application 
state of the application is maintaned seperately in the redux store
our application is always subscribed to that redux store
however the application cannot directly update the state
If the application wants to update the state it has to dispatch an action (emit an action)
Once an action has been dispatch the reducer handles that action and updates that currentState
the new state is then passed down to the app because the app is subscribed to the store
(actions , reducers , store)

- Actions
The only way your application can interact with the store
Carry some information from  your app to the redux store
Plain javascript objects
have a type property that indicates the type of action being performed
the type property is typically defined a string

- Reducers
Specifies how the app's state changes in response to actions sent to the store 
Reducers are a function that accepts currentState and action as arguments, and returns the next state of the application
(previousState,action)=>newState

- Redux Store
For our entire application , we will have only one store
Responsibilities {
  1- holding the application state
  2- allows access to state via getState()
  3- allows state to be updated via dispatch(action)
  4- Registers listeners via subscribe(listener) // accepts a function as a parameters wich is executed anytime the state in the redux store changes
  5- Handles unregistering of listeners via the function returned by the subscribe(listener)
}
--------------------------
- Cakes & Ice Creams!
---------------------
Cake shop
Cakes stored on the shelf
ShopKeeper (reducer) handles BUY_CAKE from customer
- Our business is doing really well , so now we want to also sell ice creams
- Ice creams stored in the freezer
When it comes to the shopkeeper (reducer) we can tell him to manage both cakes and ice creams but to keep things simple
We're gonna hier another shopkeeper to handle BUY_ICECREAM from customer

- ---------------------------
- Middleware
------------
- The suggested way to extend redux with custom functionality (redux with extra features)
- Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
- Use middleware for logging , crash reporting , performing asynchronous tasks ...
---------------------------------------------
- Actions
----------
1- Synchronous actions
-----------------------
As soon as an action was dispatched , the state was immediately updated
if you dispatch the BUY_CAKE action , the numOfCakes was right away decremented by 1

1- Asynchronous actions
-----------------------
Asynchronous API calls to fetch data from an end point and use that data in your application

----
Our application
Fetches a list of users from an API end point and stores it in the redux store
state?
actions?
reducer?

1- State={
  loading:true,
  data:[],
  errorMessage:''
}
loading - Display a loading spinner in our component
data - list of users

2- Actions
1- FETCH_USER_REQUEST - fetch list of users
2- FETCH_USERS_SUCCESS- fetched successfully
3- FETCH_USERS_FAILED - Error fetching the data

3- Reducers
case FETCH_USERS_REQUEST:
loading:true
case FETCH_USERS_SUCCESS:
loading:false,
users:data(from API)
case FETCH_USERS_FAILED:
loading:false,
error:error (from API)

- Async action creaters
1- axios: requests to an API end point
2- redux-thunk:{
  package from the redux eco system
  it is the standard way to define asynchronous action creators in our application
  it is a middleware we're applying to our redux store
}