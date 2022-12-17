import axios from "axios";
import {
  INSTA_DATA_ERROR,
  INSTA_DATA_LOADING,
  INSTA_DATA_SUCCESS,
} from "./actionType";

export const ADD_DATA = (newdata) => async (dispatch) => {
  dispatch({ type: INSTA_DATA_LOADING });
  try {
    let res = await axios.post(`https://social-hub-orcin.vercel.app/intagram`, {
      ...newdata,
    });
    dispatch({ type: INSTA_DATA_SUCCESS, paylode: res.data });
  } catch (error) {
    dispatch({ type: INSTA_DATA_ERROR });
  }
};
