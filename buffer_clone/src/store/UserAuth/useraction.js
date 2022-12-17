import axios from "axios";
import {
  GET_DATA_ERROR,
  GET_LOADING_DATA,
  GET_SUCCESS_DATA,
  INSTA_DATA_ERROR,
  INSTA_DATA_LOADING,
} from "./useractionTypes";

export const GET_DATA = () => async (dispatch) => {
  dispatch({ type: GET_LOADING_DATA });
  try {
    let data = await axios.get("https://social-hub-orcin.vercel.app/intagram");
    dispatch({ type: GET_SUCCESS_DATA, payload: data });
  } catch (error) {
    dispatch({ type: GET_DATA_ERROR });
  }
};

export const ADD_DATA = async (dispatch, data) => {
  dispatch({ type: INSTA_DATA_LOADING });
  try {
    let response = await axios.post(
      `https://social-hub-orcin.vercel.app/intagram`,
      data
    );
    dispatch({ type: ADMIN_AUTH_SIGN_IN_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: INSTA_DATA_ERROR, payload: e.message });
  }
};
