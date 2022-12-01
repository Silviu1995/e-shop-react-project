import { compose, createStore,applyMiddleware } from "redux";
import logger from 'redux-logger'
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)

const composeEnhancer = compose(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composeEnhancer)
export const persistor = persistStore(store)