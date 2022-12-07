
import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";
import { withMatcher } from "../../utils/reducer/reducer.utils";
export type FectchCategoriesStart = Action<
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>
export type FetchCategoriesSucces = ActionWithPayload<
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>
export type FetchCategoriesFailed = ActionWithPayload<
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,Error>

export type CategoryAction = FectchCategoriesStart | FetchCategoriesSucces | FetchCategoriesFailed

export const fetchCategoriesStart = withMatcher((): FectchCategoriesStart => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START))

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSucces => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray))

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => 
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error))

