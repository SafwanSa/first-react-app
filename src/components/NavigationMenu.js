import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
  return (
    <div>
      <div className='menu-title'>
        First React App
            </div>
      <ul>
        <li>
          <Link to="/"
            id="home-link"
            onClick={props.closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about"
            id="about-link"
            onClick={props.closeMenu}>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;