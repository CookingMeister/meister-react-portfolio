/**
 * Renders the resume section. Displays skills, download resume button.
 * Uses react-awesome-reveal library for fade in animation.
 */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import DownloadLink from './DownloadLink';
import SkillList from './SkillList';

export default function Resume() {
  const fontStyles = {
    fontSize: '1.2rem',
    color: 'antiquewhite',
    textDecoration: 'none',
    textShadow: '1px 1px 3px black',
    // li: {
    //   marginLeft: '-0.5rem',
    //   marginTop: '1rem',
    //   color: 'antiquewhite',
    //   textShadow: '1px 1px 3px black',
    // },
  };

  const skillCategories = [
    {
      title: 'Libraries & Frameworks',
      skills: [
        'React',
        'React-Router',
        'Node',
        'Express',
        'Spring Boot',
        'Apollo Server',
        'Bootstrap',
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Git',
        'GitHub',
        'Netlify',
        'Render',
        'Heroku',
        'Webpack',
        'Vite',
      ],
    },
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript (ES6+)', 'HTML', 'CSS'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'GraphQL'],
    },
  ];

  return (
    <section
      id="Resume"
      style={{
        fontFamily: 'Roboto, sans-serif',
        backgroundImage:
          'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
        paddingTop: '20vh',
        paddingBottom: '8vh',
      }}
    >
      <div className="container px-4">
        <h2
          className="fs-2"
          style={{
            color: 'antiquewhite',            
            textShadow: '1px 1px 3px black',
            marginBottom: '2.5rem',
          }}
        >
          Resume
        </h2>
        <div className="border-top border-light my-3" style={{ opacity: '0.6' }}></div>

        <Fade duration={2100} triggerOnce>
          <div className="row row-cols align-items-stretch g-4 p-5 mb-3">
            <div className="col-lg-12 d-flex justify-content-center mx-lg-5 mx-2">
              <div className="row">
                <DownloadLink />
                <h4
                  style={{
                    color: 'antiquewhite',
                    textShadow: '1px 1px 3px black',
                    marginLeft: '-2vw',
                  }}
                >
                  Skills
                </h4>
                <div className="border-top border-light mt-4 mb-5" style={{ opacity: '0.6' }}></div>

                {skillCategories.map((category, index) => (
                  <SkillList
                    key={index}
                    title={category.title}
                    skills={category.skills}
                    fontStyles={fontStyles}
                  />
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
