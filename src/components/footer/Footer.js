import React from 'react';

import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <svg width="38" height="23">
                  <use
                    href="./img/icons/sprite.svg#social-vk"
                    viewBox="0 0 38 23"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <svg width="38" height="38">
                  <use
                    href="./img/icons/sprite.svg#social-instagram"
                    viewBox="0 0 38 23"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <svg width="38" height="31">
                  <use
                    href="./img/icons/sprite.svg#social-twitter"
                    viewBox="0 0 38 23"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <svg width="38" height="38">
                  <use
                    href="./img/icons/sprite.svg#social-github"
                    viewBox="0 0 38 23"></use>
                </svg>
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <svg width="38" height="38">
                  <use
                    href="./img/icons/sprite.svg#social-linked-in"
                    viewBox="0 0 38 23"></use>
                </svg>
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
