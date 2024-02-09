// inport css from input.css
import './input.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Teamform from './components/Teamform';
import Team from './components/Team';
import Gameform from './components/Gameform'; 
import Home from './pages/Home';
import Welcome from './pages/Welcome';


function App() {
  return (
    <>
    <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/new-team" element={<Teamform/>} />
          <Route path="/teams" element={<Team/>} /> 
          <Route path="/new-game" element =  {<Gameform/>} /> 
    </Routes>
    </>
  );
}

export default App;