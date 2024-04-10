import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

export default function Navbar() {
  const activeLinkClass = 'nav-list__link nav-list__link--active';
  const defaultLinkClass = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-wrapper">
          <NavLink to="/" className="logo">
            <span className="_bold">Freelancer </span>Portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : defaultLinkClass
                }>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : defaultLinkClass
                }>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLinkClass : defaultLinkClass
                }>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
