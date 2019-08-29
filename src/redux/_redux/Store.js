import { createStore, combineReducers, applyMiddleware } from 'redux'

import ListKost from '../_reducers/ListKost'
import { logger, promise } from './Middleware'



const reducers = combineReducers({
    ListKost
})


const Store = createStore(
    reducers,
    applyMiddleware(promise,logger)
)

export default Store