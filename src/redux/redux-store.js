import { combineReducers, legacy_createStore as createStore } from "redux";
import friendsReducer from "./friends-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
});

let store = createStore(reducers);

export default store;
