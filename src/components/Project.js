import React, { useEffect } from 'react';
import './styles/project.css';
import VanillaTilt from 'vanilla-tilt';

const Project = () => {
  
  useEffect(() => {
    fetch('/projects.json') // Make sure this path is correct
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const container = document.querySelector('.project-sec');

        data.forEach(project => {
          const card = document.createElement('div');
          card.classList.add('card');

          const projectHTML = `
            <h2>
              <a href="${project.url}" target="_blank">
                ${project.title}
                <p>(${project.description})</p>
              </a>
            </h2>
            ${project.images.map(img => `<img src="${img}" alt="${project.title} image">`).join('')}
          `;

          card.innerHTML = projectHTML;
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className="project">
      <h1 className="font1 projecthead">PROJECTS</h1>
      <div className="project-sec" >
        {/* Project cards will be dynamically added here */}
      </div>
    </div>
  );
};

export default Project;
