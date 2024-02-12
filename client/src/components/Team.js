import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backgroundImage from './images/football.jpg';

function Team() {
  const [getTeam, setTeam] = useState([]);

  // Fetch team data
  useEffect(() => {
    axios.get('/teams')
      .then(response => {
        setTeam(response.data);
      })
      .catch(error => {
        console.error('Error fetching team data:', error);
      });
  }, []);

  return (
    <div className='container mx-auto ' >
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
      {getTeam.map(item => (
        <div key={item.id} className="bg-white shadow-md p-4 rounded-md">
         
          {/* image to use backgroundimage */}
          <img src={backgroundImage} alt="Team" className="w-full h-64 object-cover mb-4 hover:scale-110 " />
          <h1 className="text-xl font-bold mb-2 text-gray-700 ">
             Team Name: {item.team_name}
            </h1>

           <p className="text-gray-600 mb-2">
            Location: {item.location}
            </p>
            <p className="text-gray-600 mb-2">
             Established: {new Date(item.start_year).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
            </p>

            <p className="text-gray-600">
            Team Manager: {item.coach}
            </p>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Team;
