import {
    PLANNEW_LIST_FAIL,
    PLANNEW_LIST_REQUEST,
    PLANNEW_LIST_SUCCESS,
    PLANNEW_DETAIL_REQUEST,
    PLANNEW_DETAIL_SUCCESS,
    PLANNEW_DETAIL_FAIL
} from "../constants/PlanNewConstants";

export const planNewListReducer = (state = { plannews: [] }, action) => {
    switch (action.type) {
        case PLANNEW_LIST_REQUEST:
            return { loading: true, plannews: [] }
        case PLANNEW_LIST_SUCCESS:
            return { loading: false, plannews: action.payload }
        case PLANNEW_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const planNewDetailReducer = (state = { plannew: {} }, action) => {
    switch (action.type) {
        case PLANNEW_DETAIL_REQUEST:
            return {...state, loading: true }
        case PLANNEW_DETAIL_SUCCESS:
            return { loading: false, plannews: action.payload }
        case PLANNEW_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}