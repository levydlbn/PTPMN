import {
    ADD_TEACHER_REQUEST,
    ADD_TEACHER_SUCCESS,
    ADD_TEACHER_FAIL,
    TEACHER_LIST_REQUEST,
    TEACHER_LIST_SUCCESS,
    TEACHER_LIST_FAIL,
    TEACHER_DETAIL_REQUEST,
    TEACHER_DETAIL_SUCCESS,
    TEACHER_DETAIL_FAIL,
} from '../constants/TeacherConstant'

export const addTeacherReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case ADD_TEACHER_REQUEST:
            return { loading: true }
        case ADD_TEACHER_SUCCESS:
            return { loading: false, error: false, success: true }
        case ADD_TEACHER_FAIL:
            return { loading: false, error: action.payload, success: false }
        default:
            return state
    }
}

export const listTeacherReducer = (state = { teachers: [] }, action) => {
    switch (action.type) {
        case TEACHER_LIST_REQUEST:
            return { loading: true, teachers: [] }
        case TEACHER_LIST_SUCCESS:
            return { loading: false, teachers: action.payload }
        case TEACHER_LIST_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const detailTeacherReducer = (state = { teacher: {} }, action) => {
    switch (action.type) {
        case TEACHER_DETAIL_REQUEST:
            return { loading: true, ...state }
        case TEACHER_DETAIL_SUCCESS:
            return { loading: false, teacher: action.payload }
        case TEACHER_DETAIL_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}