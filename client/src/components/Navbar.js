import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/new-team">New Team</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/new-game">Create Match</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;