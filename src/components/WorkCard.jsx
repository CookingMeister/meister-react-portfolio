import React from 'react';

function WorkCard(props) {
  return (
    <div className="col">
      <a href={props.href}>
        <div
          className="bg-image h-100 card text-bg-dark rounded-4 shadow-lg"
          style={{ backgroundImage: `url(${props.image})` }}
          alt= {props.alt}
        >
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="py-4 mt-2 mb-4 display-8 lh-1">
              {props.title}
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
