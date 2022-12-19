import React from "react";
import Dialogue from "./Dialogue/Dialogue";
import Message from "./Message/Message";
import s from "./Messages.module.css";

const Messages = (props) => {
  let dialoguesElements = props.messagesPage.dialogues.map((d) => (
    <Dialogue name={d.name} id={d.id} />
  ));
  let messagesElements = props.messagesPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>{dialoguesElements}</div>
      <div>
        <div className={s.messages}>{messagesElements}</div>
        <div>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={ props.messagesPage.newMessageText } />
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
