import './App.css';
import Timer from './Timer';

import React, {useState, useEffect} from 'react';
import SettingsModal from './SettingsModal';

function App(props) {
  // add header
  // add timer

  return (
    <div>
      <Timer 
        timer_type = "SHORT" 
        timerTime = {3}> 
      </Timer>
      <Timer 
        timer_type = "LONG" 
        timerTime = {5}> 
      </Timer>
    </div>
  );
}

export default App;

/*
<Timer timer_type = "SHORT"></Timer>
      <Timer timer_type = "LONG"></Timer>
      <settingsModal/>
*/