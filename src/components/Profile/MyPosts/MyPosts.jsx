import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.profilePage.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} key={p.id} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h3 className={styles.postsTitle}>My Posts</h3>
      <div className={styles.inputBlock}>
        <div>
          <textarea className={styles.postsTextarea}
            onChange={onPostChange}
            ref={newPostElement}
            value={props.profilePage.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={styles.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
