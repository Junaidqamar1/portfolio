import React from 'react'

const Skill = () => {
  return (
<div className="skill" data-tilt data-aos="fade-right">
        <h2 className="font3">Skills</h2>
        <div className='skill-set font1'>
          <div className='skill-left'>
            <div className='programming sec'>
              <h3>
                PROGRAMMING
              </h3>
              <div className='cards'>
                <div className='C++ sk'>
                  <p>C++</p>
                  <div className="range">
                    <div className="percent cpp-percent"></div>
                  </div>45%
                </div>
                <div className='Python sk'>
                  <p>Python</p>
                  <div className="range">
                    <div className="percent python-percent"></div>
                  </div>75%
                </div>

              </div>
            </div>
            <div className='frontend sec'>
              <h3>
                FRONT-END
              </h3>
              <div className='cards'>
                <div className='html sk'>
                  <p>HTML</p>
                  <div className="range">
                    <div className="percent html-percent"></div>
                  </div>90%
                </div>
                <div className='css sk'>
                  <p>CSS</p>
                  <div className="range">
                    <div className="percent css-percent"></div>
                  </div>80%
                </div>
                <div className='react sk'>
                  <p>REACT.js</p>
                  <div className="range">
                    <div className="percent rjs-percent"></div>
                  </div>60%
                </div>
              </div>
            </div>
          </div>
          <div className='skill-right'>
            <div className='backend sec'>
              <h3>
                BACK-END
              </h3>
              <div className='cards'>
                <ul className='font3'>
                    <li>Firebase</li>
                    <li>SQL</li>
                    <li>MongoDb</li>
                    <li>Execl</li>
                </ul>
              </div>

            </div>
            <div className='other sec'>
              <h3>
                OTHER AND SOFT-SKILLS
              </h3>
              <div className='cards'>

              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Skill