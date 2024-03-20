import React from 'react';
import WorkCard from './WorkCard';

function Work() {
  return (
    <section id="Work">
      <div className="container px-4 py-5">
        <h2 className="fs-2 pb-2">Work</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      
          <WorkCard
            href="https://github.com/CookingMeister/Portfolio-dev"
            image="/img/Mockup.png"
            alt="a portfolio website showing title bar, an about section and profile pic"
            title="Development Portfolio"

          />
          <WorkCard
            title="work 2"
          />
          <WorkCard title="work 3" />
          <WorkCard title="work 4" />
          <WorkCard title="work 5" />
          <WorkCard title="work 6" />

        </div>
      </div>
    </section>
  );
}

export default Work;
