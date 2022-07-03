import {
    LOGIN_STUDENT_REQUEST,
    LOGIN_STUDENT_SUCCESS,
    LOGIN_STUDENT_FAIL,
    LOGOUT_STUDENT_REQUEST,
    LOGOUT_STUDENT_FAIL,
    LOGIN_TEACHER_REQUEST,
    LOGIN_TEACHER_SUCCESS,
    LOGIN_TEACHER_FAIL,
    LOGOUT_TEACHER_REQUEST,
    LOGOUT_TEACHER_FAIL
} from '../constants/AuthConstant'


export const loginStudentReducer = (state = { user: null }, action) => {
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

export const logoutStudentReducer = (state, action) => {
    switch (action.type) {
        case LOGOUT_STUDENT_REQUEST:
            return { loading: true }
        case LOGIN_STUDENT_SUCCESS:
            return { loading: false, user: action.payload }
        case LOGOUT_STUDENT_FAIL:
            return { loading: false, error: true }
        default:
            return state
    }
}

export const loginTeacherReducer = (state = { teacher: null }, action) => {
    switch (action.type) {
        case LOGIN_TEACHER_REQUEST:
            return {...state, loading: true }
        case LOGIN_TEACHER_SUCCESS:
            return { loading: false, teacher: action.payload }
        case LOGIN_TEACHER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const logoutTeacherReducer = (state, action) => {
    switch (action.type) {
        case LOGOUT_TEACHER_REQUEST:
            return { loading: true }
        case LOGIN_TEACHER_SUCCESS:
            return { loading: false, teacher: action.payload }
        case LOGOUT_TEACHER_FAIL:
            return { loading: false, error: true }
        default:
            return state
    }
}