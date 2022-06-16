import { createStore, combineReducers, applyMiddleware } from 'redux'
import { planNewDetailReducer, planNewListReducer } from './reducers/PlanNewReducers'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const reducer = combineReducers({
    planNewList: planNewListReducer,
    planNewDetails: planNewDetailReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store