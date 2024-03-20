import React from 'react';

function About() {
  return (
    <section id="About">
      <div className="container">
        <div className="px-4 pt-5 mt-5 text-center">
          <h1 className="display-4 fw-bold text-body-emphasis pt-5">
            I am Shawn Meister
          </h1>
          <div className="col-lg-6 mx-auto py-2">
            <p className="lead fw-bold text-body-emphasis mb-3">
              Developer, Designer, Professional Chef.
            </p>
            <p className="lead text-body-emphasis mb-2">I love
              being outdoors. Located in the river valley of Fredericton, New
              Brunswick, Canada. I am an University of New Brunswick Alumni.</p>
            
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
