import React from 'react';
import { Link } from 'react-router-dom';

function NavLink(props) {
  const linkStyle = {
    color: props.isScrolled ? 'blue' : 'antiquewhite',
  };

  return (
    <li className="nav-item">
      <Link to={props.url} style={linkStyle} className="nav-link">
        {props.name}
      </Link>
    </li>
  );
}

export default NavLink;
