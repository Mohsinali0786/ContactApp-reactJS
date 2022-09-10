// import reducer from './reducer'
// import {createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// const store=createStore(reducer,applyMiddleware(thunk))

import rootReducers from "./reducers/index"
import { createStore, applyMiddleware } from 'redux'
const store = createStore(rootReducers, applyMiddleware(thunk))


export default store