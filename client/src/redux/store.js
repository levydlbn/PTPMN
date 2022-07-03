import { createStore, combineReducers, applyMiddleware } from 'redux'
import { planNewDetailReducer, planNewListReducer } from './reducers/PlanNewReducers'
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { addStudentReducer, detailStudentReducer, listStudentInClassReducer, listStudentReducer, removeStudentReducer, scoreStudentDetailReducer, updateStudentReducer } from './reducers/Student'
import { loginStudentReducer, loginTeacherReducer } from './reducers/AuthReducer'
import { addTeacherReducer, detailTeacherReducer, listTeacherReducer } from './reducers/TeacherReducers'
import {
    addClassInYearReducer,
    addPlanNewReducer,
    addSchoolYearReducer,
    detailClassInYearReducer,
    detailSchoolYearReducer,
    listClassInYearReducer,
    listSchoolYearReducer,
    removeClassInYearReducer,
    removePlanNewReducer,
    removeSchoolYearReducer,
    updateClassInYearReducer,
    updatePlanNewReducer,
    updateSchoolYearReducer
}
from './reducers/AdminReducer'

const reducer = combineReducers({
    planNewList: planNewListReducer,
    planNewDetails: planNewDetailReducer,
    addPlanNew: addPlanNewReducer,
    updatePlanNew: updatePlanNewReducer,
    removePlanNew: removePlanNewReducer,
    studentList: listStudentReducer,
    listStudentInClass: listStudentInClassReducer,
    studentDetail: detailStudentReducer,
    studentScore: scoreStudentDetailReducer,
    studentLogin: loginStudentReducer,
    studentAdd: addStudentReducer,
    studentUpdate: updateStudentReducer,
    studentRemove: removeStudentReducer,
    teacherLogin: loginTeacherReducer,
    teacherAdd: addTeacherReducer,
    listTeacher: listTeacherReducer,
    detailTeacher: detailTeacherReducer,
    listSchoolYear: listSchoolYearReducer,
    detailSchoolYear: detailSchoolYearReducer,
    addSchoolYear: addSchoolYearReducer,
    updateSchoolYear: updateSchoolYearReducer,
    removeSchoolYear: removeSchoolYearReducer,
    listClassInYear: listClassInYearReducer,
    detailClassInYear: detailClassInYearReducer,
    addClassInYear: addClassInYearReducer,
    updateClassInYear: updateClassInYearReducer,
    removeClassInYear: removeClassInYearReducer,
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store