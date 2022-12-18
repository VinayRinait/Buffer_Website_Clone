import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  USER_LOADING,
  USER_SUCCESS,
  USER_ERROR,
} from "./actionType";

let initialstate = {
  loading: false,
  error: false,
  cart: [],
};

export let CartReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_USER: {
      return {
        ...state,
        loading: false,
        cart: [...state.cart, payload],
      };
    }

    case USER_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        cart: payload,
      };
    }
    case USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload || true,
      };
    }

    default: {
      return state;
    }
  }
};
