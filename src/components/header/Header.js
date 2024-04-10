import React from 'react';

import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <span className="_bold">
            Hi, my name is <span className="_accent">Yuri</span>{' '}
          </span>
          a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
}
