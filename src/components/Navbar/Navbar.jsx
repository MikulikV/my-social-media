import React from 'react';
import s from './Navbar.module.css';

console.log(s);
const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul>
        <li><a className={`${s.item} ${s.active}`} href='#s'>Profile</a></li>
        <li><a className={s.item} href='#s'>Messages</a></li>
        <li><a className={s.item} href='#s'>News</a></li>
        <li><a className={s.item} href='#s'>Music</a></li>
        <li><a className={s.item} href='#s'>Settings</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;