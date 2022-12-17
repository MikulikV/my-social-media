import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Messages.module.css";

const Dialogue = (props) => {
  let path = "/messages/" + props.id;

  return (
    <div className={s.dialogue + " " + s.active}>
      <img
        src="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png"
        alt="ava"
      />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Dialogue;
