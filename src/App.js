import React from 'react';
import './App.css';
import Header from './components/Header';
import Workouts from './components/Workouts';
import User from './components/User';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <Header /> 
      <User />
      <Add />
      <Workouts />
    </div>
  );
}

export default App;
