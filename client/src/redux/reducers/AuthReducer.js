import {
    LOGIN_STUDENT_REQUEST,
    LOGIN_STUDENT_SUCCESS,
    LOGIN_STUDENT_FAIL,
    LOGIN_TEACHER_REQUEST,
    LOGIN_TEACHER_SUCCESS,
    LOGIN_TEACHER_FAIL
} from '../constants/AuthConstant'

export const loginStudentReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_STUDENT_REQUEST:
            return {...state, loading: true }
        case LOGIN_STUDENT_SUCCESS:
            return { loading: false, user: action.payload }
        case LOGIN_STUDENT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const loginTeacherReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_TEACHER_REQUEST:
            return {...state, loading: true }
        case LOGIN_TEACHER_SUCCESS:
            return { loading: false, user: action.payload }
        case LOGIN_TEACHER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}