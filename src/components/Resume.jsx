import React from 'react';
import { Fade } from'react-awesome-reveal';

export default function Resume() {
  const fontStyles = {
    fontSize: '1.2rem',
    color: 'antiquewhite',
    textDecoration: 'none',
    textShadow: '1px 1px 3px black',
    li: {
      marginLeft: '-0.5rem',
      marginTop: '1rem',
      fontSize: '1.1rem',
      color: 'antiquewhite',
      textShadow: '1px 1px 3px black',
    },
  };

  return (
    <section
      id="Resume"
      style={{
        fontFamily: 'Roboto, sans-serif',
        backgroundImage:
          'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
        paddingTop: '18vh',
        paddingBottom: '8vh',
      }}
    >
      <div className="container px-4">
        <h2 className="fs-2" style={{ color: 'antiquewhite', marginTop: '1vh', marginBottom: '8vh', textShadow: '1px 1px 3px black' }}>
          Resume
        </h2>
        <Fade duration={2100} triggerOnce>
        <div className="row row-cols align-items-stretch g-4 py-5 mb-5">
          <div className="col-lg-12 d-flex justify-content-center mx-5">
            <div className="row">
              <a
                href="Resume_here"
                style={{
                  textDecoration: 'none',
                  color: '#C20024',
                  textShadow: '1px 1px 3px black',
                  fontSize: '1.2rem',
                  marginLeft: '-1.5vw',
                }}
                className="my-2 mb-5 pb-5 text-center"
              >
                <i class="fas fa-file-download mx-2"></i>
                Download Resume
              </a>
              <h4 className="pb-4" style={{color: 'antiquewhite', textShadow: '1px 1px 3px black', marginLeft: '-2vw'}}>
                Skills:
              </h4>
              <div className="col-lg-3 col-sm-6 g-4 px-2">
                <h5 style={fontStyles}>Libraries & Frameworks:</h5>
                <ul style={fontStyles.li}>
                  <li>React</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>Apollo Server</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6 g-4 px-2">
                <h5 style={fontStyles}>Tools & Platforms:</h5>
                <ul style={fontStyles.li}>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>Netlify</li>
                  <li>Render</li>
                  <li>Heroku</li>
                  <li>Webpack</li>
                  <li>Vite</li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6 g-4 px-2">
                <h5 style={fontStyles}>Languages:</h5>
                <ul style={fontStyles.li}>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6 g-4 px-2">
                <h5 style={fontStyles}>Databases:</h5>
                <ul style={fontStyles.li}>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    </section>
  );
}
