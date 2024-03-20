import React from 'react';
import WorkCard from './WorkCard';

function Work() {
  return (
    <section id="Work">
      <div className="container px-4 py-5">
        <h2 className="fs-2 pb-2">Work</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <WorkCard
            link="https://cookingmeister.github.io/Challenge1-Refactor/"
            image="./img/meeting.jpg"
            title="Responsive SEO Website"
            alt="team members holding laptops, notepads, gathered around a large table for a work meeting"
          />
          <WorkCard />
          {/* Add more WorkCard components */}
        </div>
      </div>
    </section>
  );
}

export default Work;
