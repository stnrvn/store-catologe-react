import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import productReducer from './reducers/productReducer'
import favoriteReducer from './reducers/favoriteReducer'

import logger from './middlewares/logger'

const rootReducer = combineReducers({
  products: productReducer,
  favorites: favoriteReducer
})


const store = createStore(rootReducer, applyMiddleware(logger, thunk))


console.log(store,'ini dari store')
export default store