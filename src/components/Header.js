import React from 'react'
import Navigation from './Navigation.js'

function Header() {
  return (
    <div>
      <header className='app-header'>
        <span className='app-title'>
          First React App
        </span>

        <Navigation />
      </header>
    </div>
  );
}

export default Header;
