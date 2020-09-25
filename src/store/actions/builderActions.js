import axios from 'axios';
import history from "../../history";

export const fetchBuilders = () => dispatch => {
    axios.get(`http://localhost:3001/items`).then(res => {
        dispatch({
            type: 'FETCH',
            payload: res.data
        });
    });
}

export const deleteBuilder = (id) => (dispatch) => {
    return axios.delete(`http://localhost:3001/items/${id}`).then(res => {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    });
}

export const updateBuilder = (id, updatedBuilder) => async dispatch => {
    await axios.put(`http://localhost:3001/items/${id}`, updatedBuilder);
    dispatch({
        type: 'UPDATE',
        payload: {
            id,
            updatedBuilder
        }
    })
    history.push("/");
}

export const addBuilder = (builder) => async dispatch => {
    const response = await axios.post(`http://localhost:3001/items`, builder);
    dispatch({
        type: 'ADD',
        payload: response.data
    })
    history.push("/");
}