import React from 'react';
import WorkCard from './WorkCard';
import { Fade, Zoom } from 'react-awesome-reveal';

function Portfolio() {
  const styles = {
    backgroundImage:
      'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
    paddingTop: '18vh',
    paddingBottom: '14vh',
  };

  return (
    <section id="Work" style={styles}>
      <div className="container px-4">
        <h2 className="fs-2 pb-5">Portfolio</h2>
        <div className="row row-cols-sm-1 row-cols-lg-2 row-cols-xxl-3 align-items-stretch g-5 py-5">
          <Zoom cascade damping={0.28} triggerOnce>
            <Fade duration={2500} triggerOnce>
              <WorkCard
                title="SimplyFit App"
                github="https://github.com/CookingMeister/fitness-tracker-mvc"
                deployment="https://ancient-dusk-75744-6e17b3d6732e.herokuapp.com/"
                image="/img/dashboard.png"
              />
            </Fade>
            <Fade duration={2800} triggerOnce>
              <WorkCard
                title="Christmas Movie Generator"
                github="https://github.com/CookingMeister/christmas-movie-generator"
                deployment="https://samgreenwood84.github.io/christmas-movie-generator/"
                image="/img/XmasMockup.png"
              />
            </Fade>
            <Fade duration={3000} triggerOnce>
              <WorkCard
                title="Tech Blog"
                github="https://github.com/CookingMeister/tech-blog-sequelize"
                deployment="https://infinite-ocean-68541-91b9dc3361ab.herokuapp.com/"
                image="/img/blog.png"
              />
            </Fade>
            <Fade duration={3500} triggerOnce>
              <WorkCard
                title="Weather Dashboard"
                github="https://github.com/CookingMeister/weather-dashboard"
                deployment="https://cookingmeister.github.io/weather-dashboard/"
                image="/img/weather.png"
              />
            </Fade>
            <Fade duration={4000} triggerOnce>
              <WorkCard
                title="Note Taker"
                github="https://github.com/CookingMeister/note-taker-express"
                deployment="https://note-taker-express-2rft.onrender.com/"
                image="/img/Note.png"
              />
            </Fade>
            <Fade duration={4500} triggerOnce>
              <WorkCard
                github="https://github.com/CookingMeister/timedQuiz-JS-04"
                title="JS Quiz"
                deployment="https://cookingmeister.github.io/timedQuiz-JS-04/"
                image="/img/quiz.png"
              />
            </Fade>
          </Zoom>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
