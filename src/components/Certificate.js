import React, { useEffect } from 'react';
import "./styles/certificate.css"

const Certificate = () => {
    useEffect(() => {
        fetch('/certificates.json') // Make sure this path is correct
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            const container = document.querySelector('.certicates');
            
            container.innerHTML = "";

            data.forEach(certificate => {
                // Create the card HTML structure
                const card = document.createElement('div');
                card.classList.add('certi-card');
                // <img src="background-img/ai01.png" alt="">
                const cardHTML = `
                          <div class="cerfi font3" onclick="opencertificate('certificates/${certificate}.pdf')">
                        <img src="New folder/${certificate}.png" alt="">
                        <h4>${certificate}</h4>
                    </div>
                    `;
                card.innerHTML = cardHTML;
                container.appendChild(card);
            });
          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
      }, []);
    
  return (
    <div className='certification'>
        <h2  className='font1'>CERTIFICATION</h2>
        <div className="certicates font1"  data-aos="fade-up">
            hellow

        </div>
    </div>
  )
}

export default Certificate