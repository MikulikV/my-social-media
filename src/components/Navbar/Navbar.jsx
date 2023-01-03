import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const setClass = ({ isActive }) => (isActive ? s.activeLink : s.item);

const Navbar = (props) => {
  return (
    <div className={s.nav}>
      <nav>
        <ul>
          <li className={s.item}>
            <NavLink to="/profile" className={setClass}>
              Profile
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/messages" className={setClass}>
              Messages
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/news" className={setClass}>
              News
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/music" className={setClass}>
              Music
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/settings" className={setClass}>
              Settings
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink to="/users" className={setClass}>
              Find users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
