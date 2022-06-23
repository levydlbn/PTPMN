import { createStore, combineReducers, applyMiddleware } from 'redux'
import { planNewDetailReducer, planNewListReducer } from './reducers/PlanNewReducers'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { detailStudentReducer, listStudentReducer, scoreStudentDetailReducer } from './reducers/Student'
import { loginStudentReducer, loginTeacherReducer } from './reducers/AuthReducer'

const reducer = combineReducers({
    planNewList: planNewListReducer,
    planNewDetails: planNewDetailReducer,
    studentList: listStudentReducer,
    studentDetail: detailStudentReducer,
    studentScore: scoreStudentDetailReducer,
    studentLogin: loginStudentReducer,
    teacherLogin: loginTeacherReducer,
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store