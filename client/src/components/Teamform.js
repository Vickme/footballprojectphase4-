import React, { useState } from 'react';
import axios from 'axios';

  const  NewTeamForm  = () => {
    const [team_name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [start_year, setStartYear] = useState('');
    const [coach, setCoach] = useState('');
    const[submit, setSubmit] = useState(null);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // clear input fields
      setName('');
      setLocation('');
      setStartYear('');
      setCoach(''); 
  
      axios.post('/teams', { team_name, location, start_year,coach})
        .then(response => {
          // console.log('Team created:', response.data);
          //  alert('Team created successfully'); // Display a success message
          setSubmit('success')
        })
        .catch(error => {
          // console.error('Error creating team:', error);
          // alert('Team already exists'); // Display an error message 
          setSubmit('error')
        });
    };
  
    return (
      <div className='bg-gradient-to-r from-black to-white'>
      <div className='container mx-auto flex items-center  justify-left h-screen'>
        <form onSubmit={handleSubmit } className='bg-slate-200 shadow-md rounded px-8 pt-4' >
        
        {submit === 'success' && (
            <div className="text-green-600 mb-4">
              Team created successfully!
            </div>
          )}

        {submit === 'error' && (
          <div className="text-red-600 mb-4">
            Team creation failed. Team already exists.
          </div>
          )}

        <div className='mb-8'>
          <label className='block text-blue-500 text-sm font-bold mb-2'>
            Name
          <input type="text" 
          value={team_name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          </label>
        </div>

        <div className='mb-8'>
          <label className='block text-blue-500 text-sm font-bold mb-2'>
            Location
          <input type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          required 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          </label>
        </div>

        <div className='mb-8'>
          <label className='block text-blue-500 text-sm font-bold mb-2'>
            Coach
          <input type="text"
           value={coach}
            onChange={(e) => setCoach(e.target.value)} 
            required 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>

        <div className='mb-8'>
          <label className='block text-blue-500 text-sm font-bold mb-2'>
            Start Year
          <input type="date"
           value={start_year} 
           onChange={(e) => setStartYear(e.target.value)} 
           required
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </label>
        </div>

        <div className='flex items-center justify-between'>
        <button 
        type="submit"
        disabled={!team_name || !location || !start_year || !coach} // Disable the button if any of the input fields are empty or invalid
        onClick={handleSubmit} // Call the handleSubmit function when the button is clicked
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Create Team 
        </button>


      </div>
      </form>
      </div>
      </div>
    );
  };
export default NewTeamForm;