import React from 'react';
import './App.css';
import Header from './components/Header';
import Workouts from './components/Workouts';
import User from './components/User';
import Add from './components/Add';
import Toggle from './components/Toggle'; 

function App() {
  return (
    <div className="App">
      <Header /> 
      <User />
      <Add />
      <Workouts />
      <Toggle  
        render={({on, toggle}) =>(
        <div>
          {/* a b workout connections go here */}
          {on && <h1>Show me</h1>}
        
        <button onClick={toggle}> A/B </button>
        </div>
      )}
    />
    </div>
  );
}

export default App;
