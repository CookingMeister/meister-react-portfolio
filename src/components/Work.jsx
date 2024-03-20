import React from 'react';
import WorkCard from './WorkCard';

function Work() {
  return (
    <section id="Work">
      <div className="container px-4 py-5">
        <h2 className="fs-2 pb-2">Work</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />

        </div>
      </div>
    </section>
  );
}

export default Work;
