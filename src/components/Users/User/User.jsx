import React from "react";
import s from "./User.module.css";

const User = (props) => {
  return (
    <div className={s.item}>
      <div>
        <div>
          <img src={props.photoUrl} alt="ava" />
        </div>
        <div>
          {props.followed ? (
            <button
              onClick={() => {
                props.unfollow(props.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(props.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={s.info}>
        <div>
          <div>{props.name}</div>
          <div>{props.status}</div>
        </div>
        <div>
          <div>{props.location.country}</div>
          <div>{props.location.city}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
