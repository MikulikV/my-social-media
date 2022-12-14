import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let curP = props.currentPage;
  let slicedPages;
  if (curP - 3 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(curP - 3, curP + 2);
  }

  return (
    <div className={styles.users}>
      <div className={styles.usersPages}>
        {slicedPages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p
                  ? styles.selectedPage
                  : styles.pageNumber
              }
              onClick={() => {
                props.onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className={styles.item}>
          <div className={styles.itemButton}>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="ava"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={styles.info}>
            <h4 className={styles.userName}>{u.name}</h4>
            <p>{u.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
