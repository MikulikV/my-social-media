import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messages-reducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {

  let messagesPage = props.store.getState().messagesPage;

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Messages messagesPage={messagesPage} sendMessage={sendMessage} updateNewMessage={onMessageChange} />
  );
};

export default MessagesContainer;
