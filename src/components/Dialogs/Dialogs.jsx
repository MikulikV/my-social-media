import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Vadim
                </div>
                <div className={s.dialog}>
                    Dinara
                </div>
                <div className={s.dialog}>
                    Violetta
                </div>
                <div className={s.dialog}>
                    Igor
                </div>
                <div className={s.dialog}>
                    Mom
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi, how are you?
                </div>
                <div className={s.message}>
                    Are you at home?
                </div>
                <div className={s.message}>
                    When is our appointment
                </div>
            </div>
        </div>
    );
}

export default Dialogs;