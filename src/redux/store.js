import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger'

import rootReducer from './root-reducer'
import {persistStore} from "redux-persist";

const arrayOfMiddlewares = [];
if (process.env.NODE_ENV === 'development') {
    arrayOfMiddlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...arrayOfMiddlewares));
export const persistor = persistStore(store);
export default {store, persistor};
