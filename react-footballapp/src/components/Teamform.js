import React, { useState } from 'react';
import axios from 'axios';

function NewTeamForm() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [startYear, setStartYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5555/teams', { name, location,startYear })
      .then(response => {
        console.log('Team created:', response.data);
       
      })
      .catch(error => {
        console.error('Error creating team:', error);
        
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <div>
        <label>Start Year:</label>
        <input type="number" value={startYear} onChange={(e) => setStartYear(e.target.value)} />
      </div>
      <button type="submit">Create Team</button>
    </form>
  );
}
export default NewTeamForm;