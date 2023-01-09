import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const setClass = ({ isActive }) => (isActive ? styles.activeLink : styles.item);

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.item}>
            <NavLink to="/profile" className={setClass}>
              Profile
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/users" className={setClass}>
              Users
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/messages" className={setClass}>
              Messages
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/news" className={setClass}>
              News
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/music" className={setClass}>
              Music
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/settings" className={setClass}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
