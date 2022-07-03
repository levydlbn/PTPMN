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

import axios from 'axios'


export const listTeacher = () => async(dispatch) => {
    try {
        dispatch({ type: TEACHER_LIST_REQUEST })
        const { data } = await axios.get("/teacher")
        dispatch({ type: TEACHER_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: TEACHER_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const detailTeacher = (id) => async(dispatch) => {
    try {
        dispatch({ type: TEACHER_DETAIL_REQUEST })
        const { data } = await axios.get(`/teacher/${id}`)
        dispatch({ type: TEACHER_DETAIL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: TEACHER_DETAIL_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const addTeacher = (teacher) => async(dispatch) => {
    try {
        dispatch({ type: ADD_TEACHER_REQUEST })
        await axios.post("/teacher/addteacher", teacher)
        dispatch({ type: ADD_TEACHER_SUCCESS })
    } catch (error) {
        dispatch({
            type: ADD_TEACHER_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}