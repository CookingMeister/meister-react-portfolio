import React, { useState } from 'react';
import Icon from './Icon';

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
    textDecoration: 'none',
  };

  return (
    <div className="col col-xl-12">
      <div
        className="bg-image card rounded-4 shadow-lg"
        style={cardStyle}
        alt={props.alt}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Icon />

        <div className="rounded-4" style={overlayStyles}>
          <h3>{props.title}</h3>
          <div style={{ display: 'flex' }}>
            <a href={props.deployment} className="py-2">
              <i className="fas fa-link fa-2x mx-3" style={{ color: 'red' }}></i>
            </a>
            <a href={props.github} className="py-2">
              <i className="fab fa-github fa-2x mx-3" style={{ color: '' }}></i>
            </a>
          </div>
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
