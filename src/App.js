import './App.css';
import Timer from './Timer';

import React, {useState, useEffect} from 'react';
import SettingsModal from './SettingsModal';

function App(props) {
  const [toggleSecond, setToggleSecond] = useState(false);

  // add header
  // add timer
  return (
    <div>
      <div class="header">
        <span class="title">Pomodoro Timer Plus+</span>
        <button class="toggle-long" onClick = {()=>setToggleSecond(!toggleSecond)}>Long-Timer</button>
      </div>

      <Timer 
        timer_type = "SHORT" 
        timerTime = {3}> 
      </Timer>
      {toggleSecond ?
        <Timer 
          timer_type = "LONG" 
          timerTime = {5}> 
        </Timer>
        : null
      }
    </div>
  );
}

export default App;

/*
<Timer timer_type = "SHORT"></Timer>
      <Timer timer_type = "LONG"></Timer>
      <settingsModal/>
*/