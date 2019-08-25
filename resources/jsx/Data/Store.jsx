import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import ApplicationReducer from './Reducers/ApplicationReducer'

const defaultReducers = {
    ApplicationReducer
}

const initialState = {}

const middlewares = [thunk]
const Store = createStore(
    createReducer(),
    initialState,
    compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

Store.asyncReducers = {}
Store.injectReducer = (key, asyncReducer) => {
    Store.asyncReducers[key] = asyncReducer
    Store.replaceReducer(createReducer(Store.asyncReducers))
}

function createReducer(asyncReducers) {
    return combineReducers({
        ...defaultReducers,
        ...asyncReducers
    })
}
export default Store;
