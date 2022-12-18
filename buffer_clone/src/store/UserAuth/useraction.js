import axios from "axios";
import {
  GET_DATA_ERROR,
  GET_LOADING_DATA,
  GET_SUCCESS_DATA,
} from "./useractionTypes";

export const GET_DATA = () => async (dispatch) => {
  dispatch({ type: GET_LOADING_DATA });
  try {
    let data = await axios.get("https://9oze9f.sse.codesandbox.io/instagram");
    dispatch({ type: GET_SUCCESS_DATA, payload: data });
    console.log(data);
  } catch (error) {
    dispatch({ type: GET_DATA_ERROR });
  }
};
