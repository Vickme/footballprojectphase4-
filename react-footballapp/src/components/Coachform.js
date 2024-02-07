import React, { useState } from 'react';
import axios from 'axios';

function NewCoachForm() {
  const [name, setName] = useState('');
 

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5555/coaches', { name })
      .then(response => {
        console.log('Coach created:', response.data);
        
      })
      .catch(error => {
        console.error('Error creating coach:', error);
        
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      
      <button type="submit">Create Coach</button>
    </form>
  );
}

export default NewCoachForm;