import React, { useEffect } from 'react';
import './styles/portfolio.css';
import AOS from 'aos';
import Typed from 'typed.js';
// import VanillaTilt from 'vanilla-tilt'
import 'aos/dist/aos.css'
// import "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.1/vanilla-tilt.js"

const Portfolio = () => {
  useEffect(() => {
    AOS.init();

    const typedOptions = {
      strings: ['Developer', 'Designer', 'Coder'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed('#element', typedOptions);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="portfolio">
      <div className="move cursor"></div>
      <div data-aos="fade-right" className="text">
        <h2 className="sort font3" data-aos="fade-right">
          PASSIONATE CODER <section>WITH</section>
          <section>EAGER TO</section> INNOVATE TECH
        </h2>
        <div className="pera font3">
          <p>I am a <span id="element"></span></p>
        </div>
      </div>
      <div className="photo"></div>
    </div>
  );
};

export default Portfolio;
