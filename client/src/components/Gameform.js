import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewGameForm() {
  const [home_team, setHomeTeam] = useState('');
  const [away_team, setAwayTeam] = useState('');
  const [league, setLeague] = useState('');
  const [game_time, setGameTime] = useState('');
  const [gameOptions, setGameOptions] = useState([]);
  const [teamOptions, setTeamOptions] = useState([]);
  const [upcomingGames, setUpcomingGames] = useState([]);

  useEffect(() => {
    // Fetch teams
    axios.get('/teams')
      .then(response => {
        setTeamOptions(response.data);
      })
      .catch(error => {
        console.error('Error fetching team data:', error);
      });

    // Fetch upcoming games
    axios.get('/upcoming_games')
      .then(response => {
        setUpcomingGames(response.data);
      })
      .catch(error => {
        console.error('Error fetching upcoming game data:', error);
      });

    // fetch league name
    axios.get('http://localhost:5555/games')
    .then(response => {
      setGameOptions(response.data);
    })
    .catch(error => {
      console.error('Error fetching game data:', error);
    });
  }, []);

  const getAvailableAwayTeams = () => {
    // Filter out teams that are already selected as home_team
    return teamOptions.filter(team => team.name !== home_team);
  };

  const handleHomeTeamChange = (selectedHomeTeam) => {
    setHomeTeam(selectedHomeTeam);
    // Reset away_team when home_team changes
    setAwayTeam('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/upcoming_games', { home_team, away_team, league, game_time })
      .then(response => {
        console.log('Game created:', response.data);
        // Assuming you want to update the upcomingGames state after creating a new game
        setUpcomingGames(prevUpcomingGames => [...prevUpcomingGames, response.data]);
        // Optionally, you can reset the form fields
        setHomeTeam('');
        setAwayTeam('');
        setLeague('');
        setGameTime('');
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
        <select value={league} onChange={(e) => setLeague(e.target.value)} required >
          <option value="">Select League</option>
          {gameOptions.map(game => (
            <option key={game.id} value={game.name}>{game.name}</option>
          ))}
        </select>
      </div>
        <div>
          <label>Home Team:</label>
          <select value={home_team} onChange={(e) => handleHomeTeamChange(e.target.value)} required>
            <option value="">Select Home Team</option>
            {teamOptions.map(team => (
              <option key={team.id} value={team.name}>{team.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Away Team:</label>
          <select value={away_team} onChange={(e) => setAwayTeam(e.target.value)} required>
            <option value="">Select Away Team</option>
            {getAvailableAwayTeams().map(team => (
              <option key={team.id} value={team.name}>{team.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Game Time:</label>
          <input type="datetime-local" value={game_time} onChange={(e) => setGameTime(e.target.value)} />
        </div>

        <button type="submit">Create Game</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>League</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Game Time</th>
          </tr>
        </thead>
        <tbody>
          {upcomingGames.map(game => (
            <tr key={game.id}>
              <td>{game.league_name}</td>
              <td>{game.home_team}</td>
              <td>{game.away_team}</td>
              <td>{game.game_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default NewGameForm;
