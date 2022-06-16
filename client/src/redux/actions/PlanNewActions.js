import { PLANNEW_DETAIL_FAIL, PLANNEW_DETAIL_REQUEST, PLANNEW_DETAIL_SUCCESS, PLANNEW_LIST_FAIL, PLANNEW_LIST_REQUEST, PLANNEW_LIST_SUCCESS } from "../constants/PlanNewConstants"
import axios from 'axios'


export const listPlanNew = () => async(dispatch) => {
    try {
        dispatch({ type: PLANNEW_LIST_REQUEST })
        const { data } = await axios.get("/plannews");

        dispatch({ type: PLANNEW_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PLANNEW_LIST_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}

export const listPlanNewDetails = (id) => async(dispatch) => {
    try {
        dispatch({ type: PLANNEW_DETAIL_REQUEST })
        const { data } = await axios.get(`/plannews/${id}`);

        dispatch({ type: PLANNEW_DETAIL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: PLANNEW_DETAIL_FAIL,
            payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,
        })
    }
}