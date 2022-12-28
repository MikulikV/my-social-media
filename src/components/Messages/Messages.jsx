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

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessage(text);
  };

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>{dialoguesElements}</div>
      <div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <div>
              <textarea
                onChange={onMessageChange}
                ref={newMessageElement}
                value={props.messagesPage.newMessageText}
              />
            </div>
            <div>
              <button onClick={onSendMessage}>Send message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
