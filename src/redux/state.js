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
      newMessageText: "My new message",
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
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._subscriber();
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._subscriber();
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessageText = '';
    this._subscriber();
  },
  updateNewMessageText(newMessage) {
    this._state.messagesPage.newMessageText = newMessage;
    this._subscriber();
  }
}

window.store = store;

export default store;