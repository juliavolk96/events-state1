import React from 'react';

function ProjectList(props) {
  const { projects } = props;

  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <img src={project.img} alt={project.category} />
          <p>{project.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
