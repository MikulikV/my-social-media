import React from "react";
import Friend from "./Friend/Friend";
import s from "./Friends.module.css";

const Friends = (props) => {
  let friendsElements = props.state.friends.map((n) => <Friend name={n.name} />);
  return <div className={s.friends}>{friendsElements}</div>;
};

export default Friends;
