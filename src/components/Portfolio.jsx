import React, { useEffect, useRef } from 'react';
import './styles/portfolio.css';
import AOS from 'aos';
import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    AOS.init();

    const typedOptions = {
      strings: ['Developer', 'Designer', 'Coder'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    };

    const typed = new Typed('#element', typedOptions);

    if (imgRef.current) {
      VanillaTilt.init(imgRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }

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
      <div className="photo">
        <div className='imgbox'>
        <div className='tape1'></div>
        <div className='tape2'></div>
        <img src='photo3.jpeg' ref={imgRef} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
