import axios from "axios";
import {
  GET_DATA_ERROR,
  GET_LOADING_DATA,
  GET_SUCCESS_DATA,
} from "./useractionTypes";

export const GET_DATA = () => async (dispatch) => {
  dispatch({ type: GET_LOADING_DATA });
  try {
    let res = await axios.get("https://mp0i41.sse.codesandbox.io/users");
    dispatch({ type: GET_SUCCESS_DATA, payload: res.data });
    console.log(data);
  } catch (error) {
    dispatch({ type: GET_DATA_ERROR });
  }
};
