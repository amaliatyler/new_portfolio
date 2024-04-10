import React from 'react';
import Header from '../components/header/Header';

<Header />;

export default function Home() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1 className="section__title">Skills</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="section__subtitle">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="section__subtitle">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
