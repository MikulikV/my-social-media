import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./../Messages.module.css";
import userPhoto from "../../../assets/images/user.png";

const setClass = ({ isActive }) =>
  isActive ? styles.activeDialogue : styles.userDialogue;

const Dialogue = (props) => {
  let path = "/messages/" + props.id;

  return (
    <div className={styles.dialogue}>
      <img src={userPhoto} alt="ava" />
      <NavLink to={path} className={setClass}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialogue;
