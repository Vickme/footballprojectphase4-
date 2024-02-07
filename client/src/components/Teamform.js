import React, { useState } from 'react';
import axios from 'axios';

  const  NewTeamForm  = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [start_year, setStartYear] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // clear input fields
      setName('');
      setLocation('');
      setStartYear('');
  
      axios.post('/teams', { name, location, start_year })
        .then(response => {
          // console.log('Team created:', response.data);
          alert('Team created successfully'); // Display a success message
          
        })
        .catch(error => {
          // console.error('Error creating team:', error);
          alert('Team already exists'); // Display an error message 
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div>
          <label>Start Year:</label>
          <input type="date" value={start_year} onChange={(e) => setStartYear(e.target.value)} required />
        </div>
        <button type="submit">Create Team</button>
      </form>
    );
  };
export default NewTeamForm;