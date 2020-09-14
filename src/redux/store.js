import {applyMiddleware, createStore} from "redux";
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const arrayOfmiddlewares= [logger];
const store = createStore(rootReducer, applyMiddleware(...arrayOfmiddlewares));
export default store;
