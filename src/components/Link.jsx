import React, { useState, useEffect } from 'react';

function Link(props) {
  const linkStyle = {
    color: props.isScrolled ? 'blue' : 'antiquewhite',
  };

  return (
    <li className="nav-item">
      <a href={props.href} style={linkStyle} className="nav-link">
        {props.name}
      </a>
    </li>
  );
}

export default Link;
