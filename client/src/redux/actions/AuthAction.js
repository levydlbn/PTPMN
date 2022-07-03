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
    LOGOUT_TEACHER_FAIL,

} from '../constants/AuthConstant'
import axios from 'axios'


export const loginStudent = (student, navigate) => async(dispatch) => {
    try {
        dispatch({ type: LOGIN_STUDENT_REQUEST })
        const res = await axios.post("/auth/login/student", student);
        dispatch({ type: LOGIN_STUDENT_SUCCESS, payload: res.data, })
        navigate("/")
    } catch (error) {
        dispatch({
            type: LOGIN_STUDENT_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
        alert("Tài khoản không tồn tại")
    }
}

export const logoutStudent = (navigate, id, accessToken) => async(dispatch) => {
    try {
        dispatch({ type: LOGOUT_STUDENT_REQUEST })
        const res = await axios.post("/auth/logout/student", id, {
            headers: { token: `bearer ${accessToken}` }
        })
        console.log(res)
        dispatch({ type: LOGIN_STUDENT_SUCCESS, payload: res.data })
        navigate("/loginStudent")
    } catch (error) {
        dispatch({
            type: LOGOUT_STUDENT_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }

}

export const loginTeacher = (teacher, navigate) => async(dispatch) => {
    try {
        dispatch({ type: LOGIN_TEACHER_REQUEST })
        const { data } = await axios.post("/auth/login/teacher", teacher)
        dispatch({ type: LOGIN_TEACHER_SUCCESS, payload: data })
        navigate("/")
    } catch (error) {
        dispatch({
            type: LOGIN_TEACHER_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
        alert("Tài khoản không tồn tại")
    }
}

export const logoutTeacher = (navigate, id, accessToken) => async(dispatch) => {
    try {
        dispatch({ type: LOGOUT_TEACHER_REQUEST })
        const res = await axios.post("/auth/logout/teacher", id, {
            headers: { token: `bearer ${accessToken}` }
        })
        console.log(res)
        dispatch({ type: LOGIN_TEACHER_SUCCESS, payload: res.data })
        navigate("/loginStudent")
    } catch (error) {
        dispatch({
            type: LOGOUT_TEACHER_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }

}