// import reducer from './reducer'
// import {createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// const store=createStore(reducer,applyMiddleware(thunk))

import rootReducers from "./reducer/index"
import {createStore,applyMiddleware} from 'redux'
const store=createStore(rootReducers,applyMiddleware(thunk))


export default store