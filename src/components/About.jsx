import React from 'react';

function About() {
  return (
    <section id="About">
      <div className="container">
        <div className="px-4 p-5 my-5 text-center">
          <h1 className="display-4 fw-bold text-body-emphasis">
            I am Shawn Meister
          </h1>
          <div className="col-lg-6 mx-auto py-4">
            <p className="lead mb-4">
              <strong>Developer, Designer, Professional Chef.</strong> I love
              being outdoors. Located in the river valley of Fredericton, New
              Brunswick, Canada. I am an University of New Brunswick Alumni.
            </p>
          </div>
          <div className="overflow-hidden mb-5" style={{ minHeight: '60vh' }}>
            <div className="container px-5">
              <img
                src="./img/pic1.png"
                className="img-fluid rounded-3 mb-4"
                alt="Sunny summer day profile picture of young man smiling near the shore"
                width="auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
