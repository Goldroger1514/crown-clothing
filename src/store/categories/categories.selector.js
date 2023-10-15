export let selectCategories = (state) => {
  console.log('Selector fired')
  return state.categories.categoriesArray.reduce((acc, category) => {
    let { title, items } = category
    acc[title.toLowerCase()] = items
    return acc
  }, {})
}
/**
 * 
 */