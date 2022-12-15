import {
  ADMIN_AUTH_SIGN_IN_ERROR,
  ADMIN_AUTH_SIGN_IN_LOADING,
  ADMIN_AUTH_SIGN_IN_SUCCESS,
  ADMIN_AUTH_SIGN_OUT,
} from "../AdminRedux/admin.actiontypes";

let token = localStorage.getItem("token") || "";

let initialState = {
  loading: false,
  error: false,
  isAuth: !!token,
  token: token,
  data: [],
};

export let adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case ADMIN_AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ADMIN_AUTH_SIGN_IN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
        data: payload.data,
      };
    }
    case ADMIN_AUTH_SIGN_OUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: "",
      };
    }

    default: {
      return state;
    }
  }
};
