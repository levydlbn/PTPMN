import {
    LOGIN_STUDENT_REQUEST,
    LOGIN_STUDENT_SUCCESS,
    LOGIN_STUDENT_FAIL,
    LOGIN_TEACHER_REQUEST,
    LOGIN_TEACHER_SUCCESS,
    LOGIN_TEACHER_FAIL
} from '../constants/AuthConstant'
import axios from 'axios'


export const loginStudent = (student) => async(dispatch) => {
    try {
        dispatch({ type: LOGIN_STUDENT_REQUEST })
        const { data } = await axios.post("/login/student", student)
        dispatch({ type: LOGIN_STUDENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: LOGIN_STUDENT_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const loginTeacher = (teacher) => async(dispatch) => {
    try {
        dispatch({ type: LOGIN_TEACHER_REQUEST })
        const { data } = await axios.post("/login/teacher", teacher)
        dispatch({ type: LOGIN_TEACHER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: LOGIN_TEACHER_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}