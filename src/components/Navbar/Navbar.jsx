import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const setClass = ({isActive}) => isActive ? s.activeLink : s.item;


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink to='/profile' className={setClass}>Profile</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/dialogs' className={setClass}>Messages</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/news' className={setClass}>News</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/music' className={setClass}>Music</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/settings' className={setClass}>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;