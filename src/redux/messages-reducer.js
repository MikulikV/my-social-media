const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
});

export default messagesReducer;
