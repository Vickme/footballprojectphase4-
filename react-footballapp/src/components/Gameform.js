import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewGameForm() {
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  const [gamename, setGameName ] = useState('');
  const [teamOptions, setTeamOptions] = useState([]);

  useEffect(() => {
  
    axios.get('http://localhost:5555/teams')
      .then(response => {
        setTeamOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching team data:', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5555/games', { team1, team2, gamename })
      .then(response => {
        console.log('Game created:', response.data);
      })
      .catch(error => {
        console.error('Error creating game:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>GameName:</label>
        <input type="text" value={gamename} onChange={(e) => setGameName(e.target.value)} />
      </div>

      <div>
        <label>Team 1:</label>
        <select value={team1} onChange={(e) => setTeam1(e.target.value)}>
          <option value="">Select Team 1</option>
          {teamOptions.map(team => (
            <option key={team.id} value={team.name}>{team.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Team 2:</label>
        <select value={team2} onChange={(e) => setTeam2(e.target.value)}>
          <option value="">Select Team 2</option>
          {teamOptions.map(team => (
            <option key={team.id} value={team.name}>{team.name}</option>
          ))}
        </select>
      </div>
      
      <button type="submit">Create Game</button>
    </form>
  );
}

export default NewGameForm;