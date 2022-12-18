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

let rootReducer = combineReducers({
  authManager: adminReducer,
  userManager: userReducer,
  channelManager: channelReducer,
  data: dataReducer,
  cart: Cart_Reducer,
  cartManager: CartReducer,
});
let composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export let store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);