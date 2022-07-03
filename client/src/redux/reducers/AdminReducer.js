import {
    SCHOOLYEAR_LIST_REQUEST,
    SCHOOLYEAR_LIST_SUCCESS,
    SCHOOLYEAR_LIST_FAIL,
    SCHOOLYEAR_DETAIL_REQUEST,
    SCHOOLYEAR_DETAIL_SUCCESS,
    SCHOOLYEAR_DETAIL_FAIL,
    SCHOOLYEAR_ADD_REQUEST,
    SCHOOLYEAR_ADD_SUCCESS,
    SCHOOLYEAR_ADD_FAIL,
    SCHOOLYEAR_UPDATE_REQUEST,
    SCHOOLYEAR_UPDATE_SUCCESS,
    SCHOOLYEAR_UPDATE_FAIL,
    SCHOOLYEAR_REMOVE_REQUEST,
    SCHOOLYEAR_REMOVE_SUCCESS,
    SCHOOLYEAR_REMOVE_FAIL,
    CLASS_LIST_REQUEST,
    CLASS_LIST_SUCCESS,
    CLASS_LIST_FAIL,
    CLASS_DETAIL_REQUEST,
    CLASS_DETAIL_SUCCESS,
    CLASS_DETAIL_FAIL,
    CLASS_ADD_REQUEST,
    CLASS_ADD_SUCCESS,
    CLASS_ADD_FAIL,
    CLASS_UPDATE_REQUEST,
    CLASS_UPDATE_SUCCESS,
    CLASS_UPDATE_FAIL,
    CLASS_REMOVE_REQUEST,
    CLASS_REMOVE_SUCCESS,
    CLASS_REMOVE_FAIL,
    PLANNEW_ADD_REQUEST,
    PLANNEW_ADD_SUCCESS,
    PLANNEW_ADD_FAIL,
    PLANNEW_UPDATE_REQUEST,
    PLANNEW_UPDATE_SUCCESS,
    PLANNEW_UPDATE_FAIL,
    PLANNEW_REMOVE_REQUEST,
    PLANNEW_REMOVE_SUCCESS,
    PLANNEW_REMOVE_FAIL,
} from '../constants/AdminConstant'

export const listSchoolYearReducer = (state = { schoolYears: [] }, action) => {
    switch (action.type) {
        case SCHOOLYEAR_LIST_REQUEST:
            return { loading: true, schoolYears: [] }
        case SCHOOLYEAR_LIST_SUCCESS:
            return { loading: false, schoolYears: action.payload }
        case SCHOOLYEAR_LIST_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const detailSchoolYearReducer = (state = { schoolYear: {} }, action) => {
    switch (action.type) {
        case SCHOOLYEAR_DETAIL_REQUEST:
            return { loading: true, ...state }
        case SCHOOLYEAR_DETAIL_SUCCESS:
            return { loading: false, schoolYear: action.payload }
        case SCHOOLYEAR_DETAIL_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const addSchoolYearReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case SCHOOLYEAR_ADD_REQUEST:
            return { loading: true, ...state }
        case SCHOOLYEAR_ADD_SUCCESS:
            return { loading: false }
        case SCHOOLYEAR_ADD_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const updateSchoolYearReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case SCHOOLYEAR_UPDATE_REQUEST:
            return { loading: true, ...state }
        case SCHOOLYEAR_UPDATE_SUCCESS:
            return { loading: false }
        case SCHOOLYEAR_UPDATE_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const removeSchoolYearReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case SCHOOLYEAR_REMOVE_REQUEST:
            return { loading: true, ...state }
        case SCHOOLYEAR_REMOVE_SUCCESS:
            return { loading: false }
        case SCHOOLYEAR_REMOVE_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const listClassInYearReducer = (state = { listClass: [] }, action) => {
    switch (action.type) {
        case CLASS_LIST_REQUEST:
            return { loading: true, listClass: [] }
        case CLASS_LIST_SUCCESS:
            return { loading: false, listClass: action.payload }
        case CLASS_LIST_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const detailClassInYearReducer = (state = { detailClass_inyear: {} }, action) => {
    switch (action.type) {
        case CLASS_DETAIL_REQUEST:
            return { loading: true, ...state }
        case CLASS_DETAIL_SUCCESS:
            return { loading: false, detailClass_inyear: action.payload }
        case CLASS_DETAIL_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const addClassInYearReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case CLASS_ADD_REQUEST:
            return { loading: true, ...state }
        case CLASS_ADD_SUCCESS:
            return { loading: false }
        case CLASS_ADD_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}


export const updateClassInYearReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case CLASS_UPDATE_REQUEST:
            return { loading: true, ...state }
        case CLASS_UPDATE_SUCCESS:
            return { loading: false }
        case CLASS_UPDATE_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const removeClassInYearReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case CLASS_REMOVE_REQUEST:
            return { loading: true, ...state }
        case CLASS_REMOVE_SUCCESS:
            return { loading: false }
        case CLASS_REMOVE_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const addPlanNewReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case PLANNEW_ADD_REQUEST:
            return { loading: true, ...state }
        case PLANNEW_ADD_SUCCESS:
            return { loading: false }
        case PLANNEW_ADD_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const updatePlanNewReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case PLANNEW_UPDATE_REQUEST:
            return { loading: true, ...state }
        case PLANNEW_UPDATE_SUCCESS:
            return { loading: false }
        case PLANNEW_UPDATE_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}

export const removePlanNewReducer = (state = { loading: false, error: false, success: false }, action) => {
    switch (action.type) {
        case PLANNEW_REMOVE_REQUEST:
            return { loading: true, ...state }
        case PLANNEW_REMOVE_SUCCESS:
            return { loading: false }
        case PLANNEW_REMOVE_FAIL:
            return { loading: false, error: action.error }
        default:
            return state
    }
}