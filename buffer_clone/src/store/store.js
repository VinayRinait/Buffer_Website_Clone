
import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
<<<<<<< HEAD
import { adminReducer } from "./AllAdminRedux/AdminRedux/admin.reducer";
import { userReducer } from "./AllAdminRedux/UserDataRedux/UserData.reducer";
import { channelReducer } from "./AllAdminRedux/ChannelDataRedux/ChannelData.reducer";
import { dataReducer } from "./UserAuth/userReducer";
import { Cart_Reducer } from "./InstaReducer/reducer";
import  thunk  from "redux-thunk"
=======
import thunk from "redux-thunk";

import { adminReducer } from "./AllAdminRedux/AdminRedux/admin.reducer";
import { userReducer } from "./AllAdminRedux/UserDataRedux/UserData.reducer";
import { channelReducer } from "./AllAdminRedux/ChannelDataRedux/ChannelData.reducer";

>>>>>>> efa577638c6d4342ad38baba5b43506d6e085b00
let rootReducer = combineReducers({
  authManager: adminReducer,
  userManager: userReducer,
  channelManager: channelReducer,
<<<<<<< HEAD
  data: dataReducer,
  cart: Cart_Reducer,

=======
>>>>>>> efa577638c6d4342ad38baba5b43506d6e085b00
});
let composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export let store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
<<<<<<< HEAD
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


=======
);
>>>>>>> efa577638c6d4342ad38baba5b43506d6e085b00
