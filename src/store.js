
import {createStore,combineReducers,applyMiddleware} from'redux'
import logger from 'redux-logger'
import Light from './rducers/light'
import user from './rducers/userreducer'
import left from './rducers/left'
import thunk from 'redux-thunk'
export default createStore(combineReducers(
    {Light,
     left
    }),{},
    applyMiddleware(logger,thunk))
  