import friendsReducer from "./friends-reducer";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _subscriber() {
    console.log("state wasn't changed")
  },
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "What are you doing?", likesCount: 31 },
        { id: 2, message: "Where is our appointment?", likesCount: 102 },
      ],
      newPostText: "Vadim-react-samurai",
    },
    messagesPage: {
      dialogues: [
        { id: 1, name: "Vadim" },
        { id: 2, name: "Dinara" },
        { id: 3, name: "Violetta" },
        { id: 4, name: "Igor" },
        { id: 5, name: "Mom" },
      ],
      messages: [
        { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "Are you at home?" },
        { id: 3, message: "When is our appointment?" },
        { id: 4, message: "What's the matter with you, my friend?" },
      ],
      newMessageText: "",
    },
    friendsPage: {
      friends: [
        { id: 1, name: "Vadim" },
        { id: 2, name: "Dinara" },
        { id: 3, name: "Violetta" }
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
    this._subscriber();
  }
};

window.store = store;

export default store;