import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewGameForm() {
  const [home_team, setHomeTeam] = useState('');
  const [away_team, setAwayTeam] = useState('');
  const [league, setLeague] = useState('');
  const [game_time, setGameTime] = useState('');
  const [teamOptions, setTeamOptions] = useState([]);
  const [gameOptions, setGameOptions] = useState([]);

  useEffect(() => {
    // Fetch teams
    axios.get('http://localhost:5555/teams')
      .then(response => {
        setTeamOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching team data:', error);
      });

    
    axios.get('http://localhost:5555/games')
      .then(response => {
        setGameOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching game data:', error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/upcoming_games', { home_team, away_team, league, game_time })
      .then(response => {
        console.log('Game created:', response.data);
      })
      .catch(error => {
        console.error('Error creating game:', error);
      });
  };

  return (
    <>
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>League:</label>
        <select value={league} onChange={(e) => setLeague(e.target.value)}>
          <option value="">Select League</option>
          {gameOptions.map(game => (
            <option key={game.id} value={game.name}>{game.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label>HomeTeam:</label>
        <select value={home_team} onChange={(e) => setHomeTeam(e.target.value)}>
          <option value="">Select HomeTeam</option>
          {teamOptions.map(team => (
            <option key={team.id} value={team.name}>{team.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label>AwayTeam:</label>
        <select value={away_team} onChange={(e) => setAwayTeam(e.target.value)}>
          <option value="">Select AwayTeam</option>
          {teamOptions.map(team => (
            <option key={team.id} value={team.name}>{team.name}</option>
          ))}
        </select>
        </div>

        <div>
        <label>SetGameTime:</label>
        <input type="datetime-local" value={game_time} onChange={(e) => setGameTime(e.target.value)} />
        
      </div>
      <button type="submit">Create Game</button>
    </form>
      <thead>
        <tr>
          <th>League</th>
          <th>Home Team</th>
          <th>Away Team</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td>{setLeague}</td>
          <td>{setHomeTeam}</td>
          <td>{setAwayTeam}</td>
        </tr>    
      </tbody>

    </>
    
  );
}

export default NewGameForm;
