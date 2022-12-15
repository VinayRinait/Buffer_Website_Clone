<<<<<<< HEAD
import {
  legacy_createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import { adminReducer } from "./AdminRedux/admin.reducer";
import thunk from "redux-thunk";

let rootReducer = combineReducers({
  authManager: adminReducer,
});
let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
=======
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
>>>>>>> a0477e3a4b5e95408f2afd772170e8c84e3629bf
