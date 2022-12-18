import axios from "axios";
import {
  INSTA_DATA_ERROR,
  INSTA_DATA_LOADING,
  INSTA_DATA_SUCCESS,
} from "./actionType";

export const ADD_DATA = (newdata) => async (dispatch) => {
  dispatch({ type: INSTA_DATA_LOADING });
  try {
    let res = await axios.post(`https://9oze9f.sse.codesandbox.io/instagram`, {
      ...newdata,
    });

    dispatch({ type: INSTA_DATA_SUCCESS, paylode: res.data });
  } catch (error) {
    dispatch({ type: INSTA_DATA_ERROR });
  }
};
