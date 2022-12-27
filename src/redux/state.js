const ADD_POST = "ADD-POST";
const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._subscriber();
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = '';
      this._subscriber();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._subscriber();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newMessage;
      this._subscriber();
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

window.store = store;

export default store;