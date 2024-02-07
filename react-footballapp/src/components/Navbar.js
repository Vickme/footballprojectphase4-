import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/new-team">New Team</Link></li>
        <li><Link to="/new-coach">New Coach</Link></li>
        <li><Link to="/new-game">New Game</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

