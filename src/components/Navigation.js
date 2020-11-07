import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/cats">Cats</NavLink></li>
        <li><NavLink to="/trees">Trees</NavLink></li>
        <li><NavLink to="/bicycles">Bicycles</NavLink></li>
        <li><NavLink to="/boats">Boats</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
