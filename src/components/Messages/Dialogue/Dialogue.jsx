import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Messages.module.css";


const Dialogue = (props) => {
  let path = "/messages/" + props.id;

  return (
    <div className={s.dialogue + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Dialogue;
