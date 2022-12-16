import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.messagesItems}>
                <div className={s.message + ' ' + s.active}>
                    <NavLink to='/messages/1'>Vadim</NavLink>
                </div>
                <div className={s.message}>
                    <NavLink to='/messages/2'>Dinara</NavLink>
                </div>
                <div className={s.message}>
                    <NavLink to='/messages/3'>Violetta</NavLink>
                </div>
                <div className={s.message}>
                    <NavLink to='/messages/4'>Igor</NavLink>
                </div>
                <div className={s.message}>
                    <NavLink to='/messages/5'>Mom</NavLink>
                </div>
            </div>
            <div className={s.dialogues}>
                <div className={s.dialogue}>
                    Hi, how are you?
                </div>
                <div className={s.dialogue}>
                    Are you at home?
                </div>
                <div className={s.dialogue}>
                    When is our appointment
                </div>
            </div>
        </div>
    );
}

export default Messages;