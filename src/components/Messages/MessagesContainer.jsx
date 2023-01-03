import React from "react";
import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messages-reducer";
import Messages from "./Messages";


const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateNewMessage: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
