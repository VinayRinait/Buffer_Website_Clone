<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> e289e2bfdce2d1505ecd5760b078d24fab039c34
>>>>>>> a7fd4489a1e59db3ffb9ce730d3d0a6b19006b72
import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
<<<<<<< HEAD
import thunk from "redux-thunk";
import { adminReducer } from "./AdminRedux/admin.reducer";
import { Cart_Reducer } from "./InstaReducer/reducer";
import { dataReducer } from "./UserAuth/userReducer";
=======
import { adminReducer } from "./AllAdminRedux/AdminRedux/admin.reducer";
import { userReducer } from "./AllAdminRedux/UserDataRedux/UserData.reducer";
import { channelReducer } from "./AllAdminRedux/ChannelDataRedux/ChannelData.reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  authManager: adminReducer,
  userManager: userReducer,
  channelManager: channelReducer,
});
let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
<<<<<<< HEAD

// import {
//   legacy_createStore,
//   compose,
//   applyMiddleware,
//   combineReducers,
// } from "redux";
// import { adminReducer } from "./AdminRedux/admin.reducer";
>>>>>>> a7fd4489a1e59db3ffb9ce730d3d0a6b19006b72

let rootReducer = combineReducers({
  authManager: adminReducer,
  cart: Cart_Reducer,
  data: dataReducer,
});
let composer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

<<<<<<< HEAD
export let store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
=======
// export let store = legacy_createStore(rootReducer);

=======
>>>>>>> e289e2bfdce2d1505ecd5760b078d24fab039c34
>>>>>>> a7fd4489a1e59db3ffb9ce730d3d0a6b19006b72
