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
import axios from 'axios'

export const lisSchoolYear = () => async(dispatch) => {
    try {
        dispatch({ type: SCHOOLYEAR_LIST_REQUEST })
        const { data } = await axios.get("/admin/schoolYear")
        dispatch({ type: SCHOOLYEAR_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: SCHOOLYEAR_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const detaiSchoolYear = (id) => async(dispatch) => {
    try {
        dispatch({ type: SCHOOLYEAR_DETAIL_REQUEST })
        const { data } = await axios.get(`/admin/schoolYear/${id}`)
        dispatch({ type: SCHOOLYEAR_DETAIL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: SCHOOLYEAR_DETAIL_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const addSchoolYear = (schoolYear) => async(dispatch) => {
    try {
        dispatch({ type: SCHOOLYEAR_ADD_REQUEST })
        const { data } = await axios.post("/admin/addSchoolYear", schoolYear)
        dispatch({ type: SCHOOLYEAR_ADD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: SCHOOLYEAR_ADD_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const updateSchoolYear = (id, newSchoolYear) => async(dispatch) => {
    try {
        dispatch({ type: SCHOOLYEAR_UPDATE_REQUEST })
        const { data } = await axios.post(`/admin/updateSchoolYear/${id}`, newSchoolYear)
        dispatch({ type: SCHOOLYEAR_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: SCHOOLYEAR_UPDATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const removeSchoolYear = (id) => async(dispatch) => {
    try {
        dispatch({ type: SCHOOLYEAR_REMOVE_REQUEST })
        const { data } = await axios.post(`/admin/removeSchoolYear/${id}`)
        dispatch({ type: SCHOOLYEAR_REMOVE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: SCHOOLYEAR_REMOVE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const listClassInYear = (id) => async(dispatch) => {
    try {
        dispatch({ type: CLASS_LIST_REQUEST })
        const { data } = await axios.get(`/admin/classInYear/schoolYear/${id}`)
        dispatch({ type: CLASS_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: CLASS_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const detailClass = (id) => async(dispatch) => {
    try {
        dispatch({ type: CLASS_DETAIL_REQUEST })
        const { data } = await axios.get(`/admin/class/${id}`)
        dispatch({ type: CLASS_DETAIL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: CLASS_DETAIL_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const addClass = (newclass) => async(dispatch) => {
    try {
        dispatch({ type: CLASS_ADD_REQUEST })
        const { data } = await axios.post("/admin/addClass", newclass)
        dispatch({ type: CLASS_ADD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: CLASS_ADD_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const updateClass = (id, updateClass) => async(dispatch) => {
    try {
        dispatch({ type: CLASS_UPDATE_REQUEST })
        const { data } = await axios.post(`/admin/updateClass/${id}`, updateClass)
        dispatch({ type: CLASS_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: CLASS_UPDATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const removeClass = (id) => async(dispatch) => {
    try {
        dispatch({ type: CLASS_REMOVE_REQUEST })
        const { data } = await axios.post(`/admin/removeClass/${id}`)
        dispatch({ type: CLASS_REMOVE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: CLASS_REMOVE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}


export const addPlanNew = (newPlanNew) => async(dispatch) => {
    try {
        dispatch({ type: PLANNEW_ADD_REQUEST })
        const { data } = await axios.post("/admin/addPlanNew", newPlanNew)
        dispatch({ type: PLANNEW_ADD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PLANNEW_ADD_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const updatePlanNew = (id, updatePlanNew) => async(dispatch) => {
    try {
        dispatch({ type: PLANNEW_UPDATE_REQUEST })
        const { data } = await axios.post(`/admin/updatePlanNew/${id}`, updatePlanNew)
        dispatch({ type: PLANNEW_UPDATE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PLANNEW_UPDATE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const removePlanNew = (id) => async(dispatch) => {
    try {
        dispatch({ type: PLANNEW_REMOVE_REQUEST })
        const { data } = await axios.post(`/admin/removePlanNew/${id}`)
        dispatch({ type: PLANNEW_REMOVE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PLANNEW_REMOVE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}