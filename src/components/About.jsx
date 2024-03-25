import React from 'react';
import { Fade, Zoom, Roll } from 'react-awesome-reveal';

function About() {
   return (
    <section
      id="About"
      style = {{
      backgroundImage:
        'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
    }}
    >
      <div className="container">
        <div className="px-2 pt-5 mt-5 text-center">
          <Fade duration={1600} direction="down" triggerOnce>
            <h1 className="display-4 fw-bold text-body-emphasis pt-5">
              I am Shawn Meister
            </h1>
          </Fade>
          <div className="col-lg-6 mx-auto py-2">
            <Fade duration={4000} triggerOnce>
              <p className="lead fw-bold text-body-emphasis mb-3">
                Developer, Designer, Professional Chef
              </p>
            </Fade>
            <Fade direction="up" duration={1800} triggerOnce>
              <p className="lead text-body-emphasis mb-2">
                A UNB alumnus, I'm a Fredericton-based developer with a unique
                background. After pursuing Psychology and working as a culinary
                professional, I discovered my passion for coding. When not
                immersed in code or cooking up a storm, you'll find me exploring
                the great outdoors in the picturesque river valley of
                Fredericton, New Brunswick.
              </p>
            </Fade>
            <img
              src="/img/profile.png"
              className="profile-pic my-5 img-fluid"
              alt="Sunny summer day profile picture of young man smiling outside."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
