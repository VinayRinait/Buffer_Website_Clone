import {
  GET_DATA_ERROR,
  GET_LOADING_DATA,
  GET_SUCCESS_DATA,
} from "./useractionTypes";

const InitialData = {
  data: [],
  loading: false,
  error: false,
};

export const dataReducer = (state = InitialData, { type, payload }) => {
  switch (type) {
    case GET_DATA_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    case GET_SUCCESS_DATA: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case GET_LOADING_DATA: {
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    }

    default: {
      return state;
    }
  }
};
