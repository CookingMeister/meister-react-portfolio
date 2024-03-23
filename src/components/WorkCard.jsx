import React, { useState } from 'react';

const WorkCard = (props) => {
  const [showTitle, setShowTitle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = (event) => {
    setShowTitle(true);
    setIsHovered(true);
  };

  const handleMouseOut = (event) => {
    setShowTitle(false);
    setIsHovered(false);
  };

  const cardStyle = {
    backgroundImage: !isHovered ? `url(${props.image})` : 'none',
  };

  return (
    <div className="col">
      {/* <a href={props.href}> */}
        <div
          className="bg-image card text-bg-dark rounded-4 shadow-lg"
          style={cardStyle}
          alt={props.alt}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="d-flex flex-column p-5 pb-3 text-black text-shadow-1">
            <h3 className="mt-1 mb-2 display-8 lh-1">
              { showTitle? props.title : '' }
            </h3>
            <a href={ showTitle? props.deployment : '' } className="mx-2 py-2 lh-1">
            { showTitle? props.deployment : '' }
            </a>
            <a href={ showTitle? props.github : '' } className="mx-2 py-2 lh-1">
            { showTitle? 'github repo' : '' }
            </a>
            <ul className="d-flex list-unstyled mt-auto"> {/* div only for img? */}
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
        </div>
      {/* </a> */}
    </div>
  );
};

export default WorkCard;
