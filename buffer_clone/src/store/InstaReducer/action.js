import axios from "axios";
import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  USER_LOADING,
  USER_SUCCESS,
  USER_ERROR,
} from "./actionType";

//getUser
export const getUserinsta = () => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    let response = await axios.get(
      "https://kykx5q.sse.codesandbox.io/products"
    );
    dispatch({ type: USER_SUCCESS, payload: response.data });
  } catch (e) {}
};
export const addUserinsta = (message) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    let response = await axios.post(
      `https://kykx5q.sse.codesandbox.io/products/`,
      message
    );
    dispatch({ type: ADD_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: USER_ERROR });
  }
};
