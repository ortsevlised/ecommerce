import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger'

import rootReducer from './root-reducer'
import {persistStore} from "redux-persist";

const arrayOfMiddlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...arrayOfMiddlewares));
export const persistor = persistStore(store);
export default {store, persistor};
