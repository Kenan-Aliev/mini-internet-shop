import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import products from './products'
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import logs from './logs'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    products,
    logs
  })

export default createRootReducer
