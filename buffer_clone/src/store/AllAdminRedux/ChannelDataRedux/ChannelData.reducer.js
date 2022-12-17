import {
  ADD_CHANNEL,
  UPDATE_CHANNEL,
  REMOVE_CHANNEL,
  CHANNEL_LOADING,
  CHANNEL_SUCCESS,
  CHANNEL_ERROR,
} from "./ChannelData.actiontypes";

let initialstate = {
  loading: false,
  error: false,
  channels: [],
};

export let channelReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ADD_CHANNEL: {
      return {
        ...state,
        loading: false,
        channels: [...state.channels, payload],
      };
    }
    case UPDATE_CHANNEL: {
      let updatedChannel = state.channels.map((el) => {
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
        channels: updatedChannel,
      };
    }
    case REMOVE_CHANNEL: {
      let removedChannel = state.channels.filter((el) => el.id != payload);

      return {
        ...state,
        loading: false,
        channels: removedChannel,
      };
    }
    case CHANNEL_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case CHANNEL_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        channels: payload,
      };
    }
    case CHANNEL_ERROR: {
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
