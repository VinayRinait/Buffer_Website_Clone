import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "./AdminRedux/admin.reducer";
import { Cart_Reducer } from "./InstaReducer/reducer";
import { dataReducer } from "./UserAuth/userReducer";

let rootReducer = combineReducers({
  authManager: adminReducer,
  cart: Cart_Reducer,
  data: dataReducer,
});
let composer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export let store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
