import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png" alt="ava"/>
      {props.message}
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  );
};

export default Post;
