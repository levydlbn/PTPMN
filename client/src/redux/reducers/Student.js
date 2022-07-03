import {
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_SUCCESS,
    ADD_STUDENT_FAIL,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
    UPDATE_STUDENT_FAIL,
    REMOVE_STUDENT_REQUEST,
    REMOVE_STUDENT_SUCCESS,
    REMOVE_STUDENT_FAIL,
    STUDENT_LIST_REQUEST,
    STUDENT_LIST_SUCCESS,
    STUDENT_LIST_FAIL,
    STUDENT_LIST_CLASS_REQUEST,
    STUDENT_LIST_CLASS_SUCCESS,
    STUDENT_LIST_CLASS_FAIL,
    STUDENT_DETAIL_REQUEST,
    STUDENT_DETAIL_SUCCESS,
    STUDENT_DETAIL_FAIL,
    STUDENT_SCORE_REQUEST,
    STUDENT_SCORE_SUCCESS,
    STUDENT_SCORE_FAIL,
    ADD_SCORE_FAIL,
    ADD_SCORE_REQUEST,
    ADD_SCORE_SUCCESS,
    UPDATE_SCORE_FAIL,
    UPDATE_SCORE_REQUEST,
    UPDATE_SCORE_SUCCESS,
} from '../constants/StudentConstants'



export const listStudentReducer = (state = { students: [] }, action) => {
    switch (action.type) {
        case STUDENT_LIST_REQUEST:
            return { loading: true, students: [] }
        case STUDENT_LIST_SUCCESS:
            return { loading: false, students: action.payload }
        case STUDENT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const listStudentInClassReducer = (state = { classStudents: [] }, action) => {
    switch (action.type) {
        case STUDENT_LIST_CLASS_REQUEST:
            return { loading: true, classStudents: [] }
        case STUDENT_LIST_CLASS_SUCCESS:
            return { loading: false, classStudents: action.payload }
        case STUDENT_LIST_CLASS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



export const detailStudentReducer = (state = { student: {} }, action) => {
    switch (action.type) {
        case STUDENT_DETAIL_REQUEST:
            return { loading: true, ...state }
        case STUDENT_DETAIL_SUCCESS:
            return { loading: false, student: action.payload }
        case STUDENT_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const scoreStudentDetailReducer = (state = { score: [] }, action) => {
    switch (action.type) {
        case STUDENT_SCORE_REQUEST:
            return { score: [], loading: true }
        case STUDENT_SCORE_SUCCESS:
            return { loading: false, score: action.payload }
        case STUDENT_SCORE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const addStudentReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case ADD_STUDENT_REQUEST:
            return { loading: true }
        case ADD_STUDENT_SUCCESS:
            return { loading: false, error: false, success: true }
        case ADD_STUDENT_FAIL:
            return { loading: false, error: action.payload, success: false }
        default:
            return state
    }
}

export const updateStudentReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case UPDATE_STUDENT_REQUEST:
            return { loading: true }
        case UPDATE_STUDENT_SUCCESS:
            return { loading: false, error: false, success: true }
        case UPDATE_STUDENT_FAIL:
            return { loading: false, error: action.payload, success: false }
        default:
            return state
    }
}

export const removeStudentReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case REMOVE_STUDENT_REQUEST:
            return { loading: true }
        case REMOVE_STUDENT_SUCCESS:
            return { loading: false, error: false, success: true }
        case REMOVE_STUDENT_FAIL:
            return { loading: false, error: action.payload, success: false }
        default:
            return state
    }
}

export const addScoreReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case ADD_SCORE_REQUEST:
            return { loading: true }
        case ADD_SCORE_SUCCESS:
            return { loading: false, error: false, success: true }
        case ADD_SCORE_FAIL:
            return { loading: false, error: action.payload, success: false }
        default:
            return state
    }
}

export const updateScoreReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case UPDATE_SCORE_REQUEST:
            return { loading: true }
        case UPDATE_SCORE_SUCCESS:
            return { loading: false, error: false, success: true }
        case UPDATE_SCORE_FAIL:
            return { loading: false, error: action.payload, success: false }
        default:
            return state
    }
}