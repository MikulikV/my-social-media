import React from "react";
import s from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img
          src="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png"
          alt="ava"
        />
      </div>
      <div>
        { props.name }
      </div>
    </div>
  );
};

export default Friend;
