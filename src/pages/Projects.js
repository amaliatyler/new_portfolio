import React from 'react';

import Project from '../components/project/Project';

import { projects } from './../helpers/projectsList';

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <ul className="projects">
          {projects.map((project, i) => (
            <Project
              key={project.id}
              title={project.title}
              img={project.img}
              index={i}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
