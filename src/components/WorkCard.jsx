import React, { useState } from 'react';

const WorkCard = (props) => {
  const [showTitle, setShowTitle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setShowTitle(true);
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setShowTitle(false);
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundImage: `url(${props.image})`,
    position: 'relative',
    
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.82)',
    display: isHovered ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    padding: '1rem',
    transition: 'display 0.3s ease',
    textDecoration: 'none'
  };

  return (
    <div className="col-lg-6 col-xl-4 col relative-card">
      <div
        className="bg-image card rounded-4 shadow-lg"
        style={cardStyle}
        alt={props.alt}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className="d-flex flex-column p-5 pb-3 text-black text-shadow-1">
          <ul className="d-flex list-unstyled mt-auto">
            <li className="">
              <img
                src="/img/profile.png"
                alt="Sunny outdoors profile by the water"
                width="32"
                height="32"
                className="rounded-circle border border-white m-3 profile-sm"
              />
            </li>
          </ul>
        </div>
        <div
          className="rounded-4"
          style={overlayStyles}
        >
          <h3>{props.title}</h3>
          <a href={props.deployment} className="mx-1 p-2 lh-1">
            * deployed app
          </a>
          <a href={props.github} className="mx-1 p-2 lh-1">
            * github repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
