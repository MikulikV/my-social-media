import React from "react";
import User from "./User/User";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png",
        fullName: "Vadim",
        followed: true,
        status: "I am front-end developer",
        location: { city: "Ufa", country: "Russia" },
      },
      {
        id: 2,
        photoUrl:
          "https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png",
        fullName: "Dinara",
        followed: true,
        status: "I am buyer from Turkey",
        location: { city: "Istanbul", country: "Turkey" },
      },
      {
        id: 3,
        photoUrl:
          "https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png",
        fullName: "Violetta",
        followed: false,
        status: "I am doctor",
        location: { city: "Moscow", country: "Russia" },
      },
    ])
  };
  
  let usersElements = props.users.map((u) => (
    <User
      name={u.fullName}
      key={u.id}
      id={u.id}
      photoUrl={u.photoUrl}
      followed={u.followed}
      status={u.status}
      location={u.location}
      follow={props.follow}
      unfollow={props.unfollow}
    />
  ));
  return <div className={s.users}>{usersElements}</div>;
};

export default Users;
