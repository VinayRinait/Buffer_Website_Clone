import axios from "axios";
import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  USER_LOADING,
  USER_SUCCESS,
  USER_ERROR,
} from "./UserData.actiontypes";

//getUser
export let getUser = (page) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    let response = await axios.get(`https://mp0i41.sse.codesandbox.io/users?_page=${page}&_limit=3`);
    dispatch({ type: USER_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

//addUser
export let addUser = (message) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    let response = await axios.post(
      `https://mp0i41.sse.codesandbox.io/users/`,
      message
    );
    dispatch({ type: ADD_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_ERROR });
  }
};

//updateUser
export let updateUser = (id, changes) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    let response = await axios.patch(
      `https://mp0i41.sse.codesandbox.io/users/${id}`,
      { ...changes }
    );
    dispatch({ type: UPDATE_USER, payload: response.data });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};

//deleteUser

export let removeUser = (id) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    let response = await axios.delete(
      `https://mp0i41.sse.codesandbox.io/users/${id}`
    );
    dispatch({ type: REMOVE_USER, payload: id });
  } catch (e) {
    dispatch({ type: USER_ERROR, payload: e.message });
  }
};
