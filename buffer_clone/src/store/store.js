
import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import { adminReducer } from "./AllAdminRedux/AdminRedux/admin.reducer";
import { userReducer } from "./AllAdminRedux/UserDataRedux/UserData.reducer";
import { channelReducer } from "./AllAdminRedux/ChannelDataRedux/ChannelData.reducer";
import { dataReducer } from "./UserAuth/userReducer";
import { Cart_Reducer } from "./InstaReducer/reducer";
import  thunk  from "redux-thunk"
let rootReducer = combineReducers({
  authManager: adminReducer,
  userManager: userReducer,
  channelManager: channelReducer,
  data: dataReducer,
  cart: Cart_Reducer,

});
let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);


// import {
//   legacy_createStore,
//   compose,
//   applyMiddleware,
//   combineReducers,
// } from "redux";
// import { adminReducer } from "./AdminRedux/admin.reducer";

// let rootReducer = combineReducers({
//   authManager: adminReducer,
// });

// export let store = legacy_createStore(rootReducer);


