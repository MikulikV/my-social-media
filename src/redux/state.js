import { rerenderEntireTree } from "../render";

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.messagesPage.newMessageText,
  };
  state.messagesPage.messages.push(newMessage);
  state.messagesPage.newMessageText = '';
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newMessage) => {
  state.messagesPage.newMessageText = newMessage;
  rerenderEntireTree(state);
};

window.state = state;
export default state;
