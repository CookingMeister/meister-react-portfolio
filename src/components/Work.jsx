import React from 'react';
import WorkCard from './WorkCard';

function Work() {
  return (
    <section id="Work">
      <div className="container px-4 py-5">
        <h2 className="fs-2 pb-2">Work</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">      
         
          <WorkCard
            title="SimplyFit App"
            href="https://github.com/CookingMeister/fitness-tracker-mvc"
            image="/img/dashboard.png"
          />
          <WorkCard 
            title="Christmas Movie Generator"
            href="https://github.com/CookingMeister/christmas-movie-generator"
            image="/img/XmasMockup.png"
            />
          <WorkCard
            title="Tech Blog"
            href="https://github.com/CookingMeister/tech-blog-sequelize"
            image="/img/blog.png"
            />
          <WorkCard 
            title="Weather Dashboard"
            href="https://github.com/CookingMeister/weather-dashboard"
            image="/img/weather.png"
            />
          <WorkCard
            title="Note Taker"
            href="https://github.com/CookingMeister/note-taker-express"
            image="/img/Note.png"
          />
          <WorkCard
            href="https://github.com/CookingMeister/timedQuiz-JS-04"
            title="JS Quiz"
            image="/img/quiz.png"
          />

        </div>
      </div>
    </section>
  );
}

export default Work;
