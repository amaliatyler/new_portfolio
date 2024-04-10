import React from 'react';

export default function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="section__title">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="section__subtitle">Location</h2>
            <p>Moscow, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="section__subtitle">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+79051234567">+7 (905) 123-45-67</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="section__subtitle">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
