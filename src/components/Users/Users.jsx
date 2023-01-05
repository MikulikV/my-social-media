import React from "react";
import User from "./User/User";
import s from "./Users.module.css";
import axios from "axios";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  let usersElements = props.users.map((u) => (
    <User
      name={u.name}
      key={u.id}
      id={u.id}
      photos={u.photos}
      followed={u.followed}
      status={u.status}
      // location={u.location}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <div className={s.users}>{usersElements}</div>
    </div>
  );
};

export default Users;
