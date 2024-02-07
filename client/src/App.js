
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Teamform from './components/Teamform';
import Coachform from './components/Coachform';
import Gameform from './components/Gameform'; 


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/new-team" element={<Teamform/>} />
          <Route path="/new-coach" element={<Coachform/>} /> 
          <Route path="/new-game" element =  {<Gameform/>} /> 
    </Routes>
    </>
  );
}

export default App;