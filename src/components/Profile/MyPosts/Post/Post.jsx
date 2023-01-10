import React from "react";
import styles from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.png";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.post}>
        <div className={styles.postAvatar}>
          <img src={userPhoto} alt="ava" />
        </div>
        <div className={styles.postText}>{props.message}</div>
      </div>
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
