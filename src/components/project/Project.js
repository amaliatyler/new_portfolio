import React from 'react';
import { NavLink } from 'react-router-dom';

import './project.css';

export default function Project({ title, img, index }) {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img className="project__img" src={img} alt={title} />
        <p className="project__title">{title}</p>
      </li>
    </NavLink>
  );
}
