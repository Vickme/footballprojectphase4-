# FOOTBALL MANAGEMENT SYSTEM

## Description
This project consists of a React frontend application and a Flask backend API for managing football teams, games, and upcoming games. The React frontend allows users to create new teams,schudule games and update on upcoming games. while the Flask backend provides API endpoints to handle CRUD operations for teams, games, and upcoming games.

## Frontend (React)
The frontend application is built using React and React Router. It includes the following components:
- `Teamform`: Component for creating a new team.
- `Gameform`: Component for creating a new game.
- `Home`: Component for the home page.

## Backend (Flask)
The backend API is built using Flask and SQLAlchemy for database operations. It includes the following API endpoints:
- `/teams`: Endpoint for managing teams.
  - GET: Retrieve all teams.
  - POST: Create a new team.
- `/teams/<int:id>`: Endpoint for managing a specific team by ID.
  - GET: Retrieve a specific team.
  - DELETE: Delete a specific team.
  - PATCH: Update a specific team.
- `/games`: Endpoint for managing games.
  - GET: Retrieve all games.
  - POST: Create a new game.
- `/games/<int:id>`: Endpoint for managing a specific game by ID.
  - GET: Retrieve a specific game.
  - DELETE: Delete a specific game.
  - PATCH: Update a specific game.
- `/upcoming_games`: Endpoint for managing upcoming games.
  - GET: Retrieve all upcoming games.
  - POST: Create a new upcoming game.

## Installation
To run this application locally, follow these steps:
1. Clone this repository to your local machine.(git@github.com:Vickme/footballprojectphase4-.git)
2. Set up the frontend and backend in separate directories.
3. Install dependencies for both the frontend and backend using `npm install` .
4. Start the frontend and backend servers by running `npm start` for the React app and `python app.py` for the Flask API.

## Technologies Used
- Frontend: React, React Router
- Backend: Flask, SQLAlchemy
- Database: SQLite

## License & Authors
Clement Macharia & Victor Njutha 