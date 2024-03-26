import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavLink(props) {

  const linkStyle = {
    color: props.isScrolled ? 'blue' : 'antiquewhite',
    marginRight: '1rem',
  };

  const activeStyle = {
    color: 'antiquewhite',
    fontSize: '1rem',
    marginRight: '1rem',
    height: '2.5rem',
  };
  const location = useLocation();

  const isActive = location.pathname === props.url;

  return (
    <li className="nav-item">
      <Link
        to={props.url}
        style={isActive ? activeStyle : linkStyle}
        className={`nav-link ${isActive ? 'active' : ''}`}
      >
        {props.name}
      </Link>
    </li>
  );
}

export default NavLink;
