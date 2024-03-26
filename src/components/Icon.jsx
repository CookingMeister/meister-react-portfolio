import React from "react";

function Icon(props) {
  return (    
      <img
          src="/img/profile.png"
          alt="Sunny outdoors profile by the water"
          width="32"
          height="32"
          className={props.className}
        />
  );
}

export default Icon;