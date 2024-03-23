import React, { useState, useEffect } from 'react';

function Link(props) {
    return (
        <li className="nav-item">
            <a href={props.href} className="nav-link">
              {props.name}
            </a>
        </li>
    )
}

export default Link;