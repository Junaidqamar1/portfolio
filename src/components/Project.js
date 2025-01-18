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
           <img
    class="card__background"
    src="${project.image}"
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
          <div class="card__content | flow">
    <div class="card__content--container | flow">
      <h2 class="card__title">${project.title}</h2>
      <p class="card__description">
      ${project.description}
      </p>
    </div>
    <a href="${project.url}"><button class="card__button">visit</button></a>
  </div>
           
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
