import React from 'react';

function About() {
  return (
    <section id="About">
      <div className="container">
        <div className="px-2 pt-5 mt-5 text-center">
          <h1 className="display-4 fw-bold text-body-emphasis pt-5">
            I am Shawn Meister
          </h1>
          <div className="col-lg-6 mx-auto py-2">
            <p className="lead fw-bold text-body-emphasis mb-3">
              Developer, Designer, Professional Chef
            </p>
            <p className="lead text-body-emphasis mb-2">A UNB alumnus, I'm a Fredericton-based developer with a unique background. After pursuing Psychology and working as a culinary professional, I discovered my passion for coding. When not immersed in code or cooking up a storm, you'll find me exploring the great outdoors in the picturesque river valley of Fredericton, New Brunswick. </p>
            
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
