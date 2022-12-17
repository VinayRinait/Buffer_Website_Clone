import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  USER_LOADING,
  USER_SUCCESS,
  USER_ERROR,
} from "./UserData.actiontypes";

let initialstate = {
  loading: false,
  error: false,
  users: [],
};

export let userReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_USER: {
      return {
        ...state,
        loading: false,
        users: [...state.users, payload],
      };
    }
    case UPDATE_USER: {
      let updatedUser = state.users.map((el) => {
        if (el.id === payload.id) {
          return {
            ...el,
            ...payload,
          };
        }
        return el;
      });
      return {
        ...state,
        loading: false,
        users: updatedUser,
      };
    }
    case REMOVE_USER: {
      let removedUser = state.users.filter((el) => el.id != payload);

      return {
        ...state,
        loading: false,
        users: removedUser,
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
        users: payload,
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
