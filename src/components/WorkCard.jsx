import React from 'react';

function WorkCard() {
  return (
    <div className="col">
      <a href="https://github.com/CookingMeister/Portfolio-dev">
        <div
          className="bg-image h-100 card text-bg-dark rounded-4 shadow-lg"
          style={{ backgroundImage: "url('/img/Mockup.png')" }}
          alt="a portfolio website showing title bar, an about section and profile pic"
        >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="py-4 mt-2 mb-4 display-8 lh-1">
              Development Portfolio
            </h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img
                  src="/img/profile.png"
                  alt="Sunny outdoors profile by the water"
                  width="32"
                  height="32"
                  className="rounded-circle border border-white"
                />
              </li>
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
}

export default WorkCard;
