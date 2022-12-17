import React from "react";
import Dialogue from "./Dialogue/Dialogue";
import Message from "./Message/Message";
import s from "./Messages.module.css";


const Messages = (props) => {
  let dialoguesElements = props.state.dialogues.map( d => <Dialogue name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map( m => <Message message={m.message} />);

  return (
    <div className={s.dialogues}>
      <div className={s.dialoguesItems}>
        { dialoguesElements }
        </div>
      <div className={s.messages}>
        { messagesElements }
        </div>
    </div>
  );
};

export default Messages;
