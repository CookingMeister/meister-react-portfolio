import React from 'react';

export default function Resume() {
  return (
    <section id="Resume"
    style = {{
      backgroundImage:
        'linear-gradient(45deg, rgb(30, 6, 245), rgba(0, 110, 255, 0.777))',
    }}
    >
      <div className="container px-4 py-5">
        <h2 className="fs-2 pb-2">Resume</h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col-12 col-lg-4">
            <a href="Resume here" className="m-2">
              Resume Link{' '}
            </a>
            <h3 className="m-2">Skills here</h3>
            <p>
              Libraries & Frameworks: Git, GitHub, Netlify, Render, Heroku,
             Docker, Webpack, Figma
            </p>
            <p>
              Tools & Platforms: React, Next.js, Gatsby, Eleventy, Node.js,
              React Native, Tailwind CSS
            </p>
            <p>
              Languages: JavaScript (ES2015+), TypeScript, HTML, CSS
            </p>
            <p>Databases: MySQL, MongoDB, PostgreSQL, GraphQL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
