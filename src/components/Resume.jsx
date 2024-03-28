/**
 * Renders the resume section. Displays skills, download resume button.
 * Uses react-awesome-reveal library for fade in animation.
 */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import DownloadLink from './DownloadLink';

export default function Resume() {
  const fontStyles = {
    fontSize: '1.2rem',
    color: 'antiquewhite',
    textDecoration: 'none',
    textShadow: '1px 1px 3px black',
    li: {
      marginLeft: '-0.5rem',
      marginTop: '1rem',
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
        paddingTop: '27vh',
        paddingBottom: '8vh',
      }}
    >
      <div className="container px-4">
        <h2
          className="fs-2"
          style={{
            color: 'antiquewhite',
            marginTop: '1vh',
            marginBottom: '8vh',
            textShadow: '1px 1px 3px black',
          }}
        >
          Resume
        </h2>
        <Fade duration={2100} triggerOnce>
          <div className="row row-cols align-items-stretch g-4 p-5 mb-3">
            <div className="col-lg-12 d-flex justify-content-center mx-lg-5 mx-2">
              <div className="row">
                <DownloadLink />
                <h4
                  className="pb-4"
                  style={{
                    color: 'antiquewhite',
                    textShadow: '1px 1px 3px black',
                    marginLeft: '-2vw',
                  }}
                >
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
