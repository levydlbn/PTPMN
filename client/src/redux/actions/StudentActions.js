import { ADD_STUDENT_FAIL, ADD_STUDENT_REQUEST, ADD_STUDENT_SUCCESS, STUDENT_DETAIL_FAIL, STUDENT_DETAIL_REQUEST, STUDENT_DETAIL_SUCCESS, STUDENT_LIST_FAIL, STUDENT_LIST_REQUEST, STUDENT_LIST_SUCCESS } from "../constants/StudentConstants"
import axios from 'axios'


export const listStudent = () => async(dispatch) => {
    try {
        dispatch({ type: STUDENT_LIST_REQUEST })
        const { data } = await axios.get("/students");

        dispatch({ type: STUDENT_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: STUDENT_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const listStudentDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: STUDENT_DETAIL_REQUEST })
        const { data } = await axios.get(`/students/${id}`);

        dispatch({ type: STUDENT_DETAIL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: STUDENT_DETAIL_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const addStudent = (student) => async(dispatch) => {
    try {
        dispatch({ type: ADD_STUDENT_REQUEST })
        await axios.post("/students/addStudent", student)
        dispatch({ type: ADD_STUDENT_SUCCESS })
    } catch (error) {
        dispatch({
            type: ADD_STUDENT_FAIL
        })
    }
}