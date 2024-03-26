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
    fontFamily: 'Roboto, sans-serif',
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '19vh'
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
    padding: '1rem',
    transition: 'display 0.3s ease',
    textDecoration: 'none',
  };

  return (
    <div className="col">
      <div
        className="bg-image card rounded-4 shadow-lg"
        style={cardStyle}
        alt={props.alt}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Icon className="rounded-circle border border-white m-3 profile-sm"/>

        {/* Overlay div */}
        <div className="rounded-4" style={overlayStyles}>
          <h3>{props.title}</h3>
          <div style={{ display: 'flex' }}>
            <a href={props.deployment} className="py-2">
              <i className="fas fa-link fa-2x mx-3" style={{ color: '#C20024' }}></i>
            </a>
            <a href={props.github} className="py-2">
              <i className="fab fa-github fa-2x mx-3"></i>
            </a>
          </div>
          <Icon className="rounded-circle m-3 profile-sm" />
        </div>
        {/* End of Overlay */}

      </div>
    </div>
  );
};

export default WorkCard;
