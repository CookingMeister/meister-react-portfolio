/**
 * Renders a link component that changes styles based on location and scroll position.
 *
 * Handles active link styling and conditional styling based on scroll position props.
 */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavLink(props) {
  const linkStyle = {
    color: props.isScrolled ? 'blue' : 'antiquewhite',
    // marginRight: '.5rem',
  };

  const activeStyle = {
    color: 'antiquewhite',
    fontSize: '1rem',
    marginRight: '.4rem',
    height: '2.4rem'
  };
  const location = useLocation();

  const isActive = location.pathname === props.url;

  return (
    <li className="nav-item">
      <Link
        to={props.url}
        style={isActive ? activeStyle : linkStyle}
        className={`mt-1 nav-link ${isActive ? 'active' : ''}`}
      >
        {props.name}
      </Link>
    </li>
  );
}

export default NavLink;
