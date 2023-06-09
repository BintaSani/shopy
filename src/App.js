import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const CapsPage =() => (
  <div>
    <h1>CAPS PAGE</h1>
  </div>
);

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/caps' Component={CapsPage}/>
      </Routes>
    </div>
  );
}

export default App;