import React, {useState, useEffect} from 'react';
import './App.css';
import Timer from './Timer';

function App(props) {
  return (
    <div>
      <Timer timer_type = "SHORT"></Timer>
    </div>
  );
}

export default App;