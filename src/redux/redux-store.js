import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import ThunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
