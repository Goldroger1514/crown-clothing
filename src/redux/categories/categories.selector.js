import { createSelector } from "reselect"
let selectCategoryReducer = (state) => {
  console.log('selectCategoryReducer fired')
  return state.categories
}
export let selectCategories = createSelector(
  // [selectCategoryReducer, selectCurrentUser],
  // (categories, currentUser) => {
  // }
  [selectCategoryReducer],
  (categoriesReducer) => {
    console.log('selectCategories fired')
    return categoriesReducer.categoriesMap
    /**
     * This selector is a memorised selector
     * The only time that this will run if the categoriesReducer that we get back from selectCategoryReducer changes
     */
  }
)
export let selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log('selectCategoriesMap fired')
    return categories
  }
)
/**
 * []  : array of input selectors{
 * - What do i want as part of the parameters that i'm going to use to produce what the selector should return
 * - What are the slices that i want from redux store that i can use them to produce something new outside
 * }
 * ()=>: the output selector
 */
export let selectCategoriesX = (state) => {
  console.log('selectCategories Fired')
  return state.categories.categoriesMap
}
/**
 * Would it not be great if instead we only ran this selector if the categories object change that we get from the rootReducer
 * Meaning that the only time we should run this logic to derive a new categoriesMap is if our category reducer returns a new object
 * And that should only happen if the action corresponds to something in our reducer that triggers that change
 * -----------------
 * This is where we want to leverage a new library called reselect inside of the redux eco system
 */
/**
 * The basis of reselect is that it creates for us this concept of a memorised selector
 * Memorization is the process in which you cache the previous value of something so that if the input has not changed ,
 * then you just return the same output
 * createSelector memorizes them assuming that as long as the inputs have not changed , then your output should always
 * be the same
 * we have to create input selectors and output selectors
 * {
 * 1- input selectors:
 * are selectors that give us the parameters that we need in order to determine what our output should be
 * }
 * {
 * 1- output selectors
 * }
 */
/**
 * An action is dispatched that updates the categories object in the Redux store.

The Redux store notifies all components using useSelector that the state has changed.

The useSelector hook in each component checks if the input dependencies for its selector function have changed.

Since selectCategories depends on selectCategoryReducer, and selectCategoryReducer depends on the categories object, both selectors will be re-executed.

The selectCategoryReducer function fetches the updated categories object from the Redux store.

The selectCategories function extracts the categoriesMap from the updated categories object.

The selectCategoriesMap function simply returns the categories object obtained from selectCategories.

The component using selectCategoriesMap receives the updated categoriesMap and re-renders if necessary.

This process ensures that the component always has access to the latest categoriesMap data, even if only a
part of the categories object has changed. The memoization provided by createSelector prevents unnecessary 
re-executions of the selector functions when the input data remains unchanged.
 */
/**
 * If a different action is dispatched that updates a different part of the Redux store, such as setting the currentUser, 
 * the categories object itself won't change. However, the entire Redux store object is considered new, 
 * even if only a part of it has changed. This means that all components using useSelector will be notified of the change
 *  and their selector functions will be re-executed.

In this case, the selectCategoryReducer function will still be called, but it will return the same categories object
  as before since the categories object itself hasn't changed. The selectCategories function will also be called,
  but it will receive the same categories object as before, so it will also return the same categoriesMap as before.

The useSelector hook keeps track of the previous value of the input dependencies for its selector function.
  In this case, it will store the previous value of the categories object. When the Redux store notifies 
  the hook of a state change, the hook will compare the current value of the categories object to the previous value
  it stored. If the values are different, it means the categories object has changed,
  and the selector functions will be re-executed.

However, since the categories object itself hasn't changed in this case, the === comparison will return true,
  indicating that the categories object is still the same. Therefore, the selector functions won't actually recompute
  anything, and the component using selectCategoriesMap won't re-render
 */