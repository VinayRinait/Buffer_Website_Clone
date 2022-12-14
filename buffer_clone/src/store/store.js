import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import { adminReducer } from "./AdminRedux/admin.reducer";

let rootReducer = combineReducers({
  authManager: adminReducer,
});

export let store = legacy_createStore(rootReducer);
