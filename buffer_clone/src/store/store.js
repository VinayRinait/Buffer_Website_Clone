import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";

import { adminReducer } from "./AllAdminRedux/AdminRedux/admin.reducer";
import { userReducer } from "./AllAdminRedux/UserDataRedux/UserData.reducer";
import { channelReducer } from "./AllAdminRedux/ChannelDataRedux/ChannelData.reducer";
import { CartReducer } from "./InstaReducer/reducer";

let rootReducer = combineReducers({
  authManager: adminReducer,
  userManager: userReducer,
  channelManager: channelReducer,

  cart: CartReducer,
});
let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
