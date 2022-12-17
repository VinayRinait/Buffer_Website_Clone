import axios from "axios";
import {
  ADD_CHANNEL,
  UPDATE_CHANNEL,
  REMOVE_CHANNEL,
  CHANNEL_LOADING,
  CHANNEL_SUCCESS,
  CHANNEL_ERROR,
} from "./ChannelData.actiontypes";

//getUser
export let getChannel = () => async (dispatch) => {
  dispatch({ type: CHANNEL_LOADING });
  try {
    let response = await axios.get(
      "https://social-hub-orcin.vercel.app/channels"
    );
    dispatch({ type: CHANNEL_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: CHANNEL_ERROR, payload: e.message });
  }
};

//addUser
export let addChannel = (message) => async (dispatch) => {
  dispatch({ type: CHANNEL_LOADING });
  try {
    let response = await axios.post(
      `https://social-hub-orcin.vercel.app/channels`,
      message
    );
    dispatch({ type: ADD_CHANNEL, payload: response.data });
  } catch (error) {
    dispatch({ type: CHANNEL_ERROR });
  }
};

//updateUser
export let updateChannel = (id, changes) => async (dispatch) => {
  dispatch({ type: CHANNEL_LOADING });
  try {
    let response = await axios.patch(
      `https://social-hub-orcin.vercel.app/channels/${id}`,
      { ...changes }
    );
    dispatch({ type: UPDATE_CHANNEL, payload: response.data });
  } catch (e) {
    dispatch({ type: CHANNEL_ERROR, payload: e.message });
  }
};

//deleteUser

export let removeChannel = (id) => async (dispatch) => {
  dispatch({ type: CHANNEL_LOADING });
  try {
    let response = await axios.delete(
      `https://social-hub-orcin.vercel.app/channels/${id}`
    );
    dispatch({ type: REMOVE_CHANNEL, payload: id });
  } catch (e) {
    dispatch({ type: CHANNEL_ERROR, payload: e.message });
  }
};
