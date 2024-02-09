import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
    <nav className='bg-gradient-to-r from-white to-gray-600 mt-2'>
      <ul className='flex flex-row w-full p-4 text bg-white text-transform: uppercase rounded-lg shadow-lg backdrop-blur-sm backdrop-filter bg-opacity-30 
      border-2 border-gray-600/50 border-opacity-30
      h-16 items-center justify-between'>

        <li><Link to="/home">Home</Link></li>
        <li className='ml-4'><Link to="/teams">Teams</Link></li>
        <li><Link to="/new-team">Dream Team</Link></li>
        <li className='ml-4'><Link to="/new-game">Create Match</Link></li>
        <li><Link to="">LogOut</Link></li>
      </ul>
    </nav>
  </div>
  

   
  );
}

export default Navbar;