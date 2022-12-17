import {
  ADMIN_AUTH_SIGN_IN_ERROR,
  ADMIN_AUTH_SIGN_IN_LOADING,
  ADMIN_AUTH_SIGN_IN_SUCCESS,
  ADMIN_AUTH_SIGN_OUT,
} from "../AdminRedux/admin.actiontypes";

import axios from "axios";

export let login = (creds) => async (dispatch) => {
  dispatch({ type: ADMIN_AUTH_SIGN_IN_LOADING });
  try {
    let response = await axios.post(`https://reqres.in/api/login`, creds);
    dispatch({ type: ADMIN_AUTH_SIGN_IN_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: ADMIN_AUTH_SIGN_IN_ERROR, payload: e.message });
  }
};

export let logout = () => ({ type: ADMIN_AUTH_SIGN_OUT });
