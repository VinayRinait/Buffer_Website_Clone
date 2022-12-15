import {
  ADMIN_AUTH_SIGN_IN_ERROR,
  ADMIN_AUTH_SIGN_IN_LOADING,
  ADMIN_AUTH_SIGN_IN_SUCCESS,
  ADMIN_AUTH_SIGN_OUT,
  ADMIN_RESET_AUTH,
} from "../AdminRedux/admin.actiontypes";

let initialState = {
  loading: false,
  error: false,
  token: "",
  isAuth: false,
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
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
      };
    }
    case ADMIN_AUTH_SIGN_OUT: {
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
