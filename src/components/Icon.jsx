/**
 * Renders an image icon component.
 *
 * Accepts a `className` props.
 */
import React from 'react';

function Icon(props) {
  return (
    <img
      src="/img/profile.png"
      alt="Sunny outdoors profile by the water"
      width="28"
      height="28"
      className={props.className}
    />
  );
}

export default Icon;
