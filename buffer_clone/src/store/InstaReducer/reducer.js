import {
  INSTA_DATA_ERROR,
  INSTA_DATA_LOADING,
  INSTA_DATA_SUCCESS,
} from "./actionType";

let InitialData = {
  cart: [],
  loading: false,
  error: false,
};

export const Cart_Reducer = (state = InitialData, { type, payload }) => {
  switch (type) {
    case INSTA_DATA_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case INSTA_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case INSTA_DATA_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        cart: [...state.cart, payload],
      };
    }
    default: {
      return state;
    }
  }
};
