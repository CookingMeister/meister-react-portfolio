import React from 'react';
import WorkCard from './WorkCard';

function Work() {

  return (
    <section id="Work">
      <div className="container px-4 py-5">
        <h2 className="fs-2 pb-2">Work</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <WorkCard
            title='SimplyFit App'
            github="https://github.com/CookingMeister/fitness-tracker-mvc"
            deployment="https://ancient-dusk-75744-6e17b3d6732e.herokuapp.com/"
            image="/img/dashboard.png"
          />
          <WorkCard
            title="Christmas Movie Generator"
            github="https://github.com/CookingMeister/christmas-movie-generator"
            deployment="https://samgreenwood84.github.io/christmas-movie-generator/"
            image="/img/XmasMockup.png"
          />
          <WorkCard
            title="Tech Blog"
            github="https://github.com/CookingMeister/tech-blog-sequelize"
            deployment="https://infinite-ocean-68541-91b9dc3361ab.herokuapp.com/"
            image="/img/blog.png"
          />
          <WorkCard
            title="Weather Dashboard"
            github="https://github.com/CookingMeister/weather-dashboard"
            deployment="https://infinite-ocean-68541-91b9dc3361ab.herokuapp.com/"
            image="/img/weather.png"
          />
          <WorkCard
            title="Note Taker"
            github="https://github.com/CookingMeister/note-taker-express"
            deployment="https://infinite-ocean-68541-91b9dc3361ab.herokuapp.com/"
            image="/img/Note.png"
          />
          <WorkCard
            github="https://github.com/CookingMeister/timedQuiz-JS-04"
            title="JS Quiz"
            deployment="https://infinite-ocean-68541-91b9dc3361ab.herokuapp.com/"
            image="/img/quiz.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Work;
