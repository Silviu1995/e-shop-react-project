import { createSelector } from "reselect"

const selectCategoriyReducer = (state) =>  state.categories


export const selectCategories = createSelector(
  [selectCategoriyReducer],
  (categoriesSlice) => categoriesSlice.categories
  
)


export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>  categories.reduce((acc,category)=>{
    const {title,items} = category
    acc[title.toLowerCase()] = items
    return acc
  },{})
)
