import {
    ADD_STUDENT_FAIL,
    ADD_STUDENT_REQUEST,
    ADD_STUDENT_SUCCESS,
    REMOVE_STUDENT_FAIL,
    REMOVE_STUDENT_REQUEST,
    REMOVE_STUDENT_SUCCESS,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
    STUDENT_DETAIL_FAIL,
    STUDENT_DETAIL_REQUEST,
    STUDENT_DETAIL_SUCCESS,
    STUDENT_LIST_FAIL,
    STUDENT_LIST_REQUEST,
    STUDENT_LIST_SUCCESS,
    STUDENT_LIST_CLASS_FAIL,
    STUDENT_LIST_CLASS_REQUEST,
    STUDENT_LIST_CLASS_SUCCESS,
    STUDENT_SCORE_REQUEST,
    STUDENT_SCORE_SUCCESS,
    STUDENT_SCORE_FAIL,
    ADD_SCORE_FAIL,
    ADD_SCORE_REQUEST,
    ADD_SCORE_SUCCESS,
    UPDATE_SCORE_FAIL,
    UPDATE_SCORE_REQUEST,
    UPDATE_SCORE_SUCCESS,
} from "../constants/StudentConstants"
import axios from 'axios'


export const listStudentInSchool = () => async(dispatch) => {
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

export const listStudentInClass = (id) => async(dispatch) => {
    try {
        dispatch({ type: STUDENT_LIST_CLASS_REQUEST })
        const { data } = await axios.get(`/students/class/${id}`);

        dispatch({ type: STUDENT_LIST_CLASS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: STUDENT_LIST_CLASS_FAIL,
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

export const scoreStudentDetail = (id) => async(dispatch) => {
    try {
        dispatch({ type: STUDENT_SCORE_REQUEST })
        const { data } = await axios.get(`/students/scores/${id}`)
        dispatch({ type: STUDENT_SCORE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: STUDENT_SCORE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const addStudent = (student) => async(dispatch) => {
    try {
        dispatch({ type: ADD_STUDENT_REQUEST })
        const res = await axios.post("/students/addStudent", student)
        console.log(res)
        dispatch({ type: ADD_STUDENT_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({
            type: ADD_STUDENT_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const removeStudent = (id) => async(dispatch) => {
    try {
        dispatch({ type: REMOVE_STUDENT_REQUEST })
        const { data } = await axios.post(`/students/removeStudent/${id}`);

        dispatch({ type: REMOVE_STUDENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: REMOVE_STUDENT_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const updateStudent = (id, updateSt) => async(dispatch) => {
    try {
        dispatch({ type: UPDATE_STUDENT_REQUEST })
        const { data } = await axios.post(`/students/updateStudent/${id}`, updateSt);

        dispatch({ type: UPDATE_STUDENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: UPDATE_STUDENT_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const addScore = (score) => async(dispatch) => {
    try {
        dispatch({ type: ADD_SCORE_REQUEST })
        const res = await axios.post("/students/addScore", score)
        console.log(res)
        dispatch({ type: ADD_SCORE_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({
            type: ADD_SCORE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const updateScore = (id, updateScore) => async(dispatch) => {
    try {
        dispatch({ type: UPDATE_SCORE_REQUEST })
        const { data } = await axios.post(`/students/updateScore/${id}`, updateScore);

        dispatch({ type: UPDATE_SCORE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: UPDATE_SCORE_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}