import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="What are you doing?" likesCount="31"/>
        <Post message="Where is our appointment?" likesCount="102"/>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
