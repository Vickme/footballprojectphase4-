// Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to our Football Manager</h1>
        <p className="text-lg mb-4">
          Where your football management dreams come true. A simple way to manage and create your own teams.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Services Offered:</h2>
          <ul className="list-disc list-inside">
            <li>Creating your dream team</li>
            <li>Checking out the team you created together with the teams in our database</li>
            <li>Creating a match between two teams</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Instructions:</h2>
          <ol className="list-decimal list-inside">
            <li>At the top of the page, click on the "Dreamteam" route on the navbar</li>
            <li>Add a new team by filling in the correct details as asked in the specific forms</li>
            <li>Go back to the home page</li>
            <li>On the navbar, click on the "Teams" route to see the specific team or teams you have added together with other inbuilt teams</li>
            <li>Go back to the home page and click on the "Create match" route to create your own match</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;
