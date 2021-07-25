import './App.css';
import Timer from './Timer';

import React, {useState, useEffect} from 'react';
import SettingsModal from './SettingsModal';

function App(props) {
  const [toggleSecond, setToggleSecond] = useState(false);

  // add header
  // add timer
  return (
    <>
      <div className="header">
        <span className="title">Pomodoro Timer Plus+</span>
        <button className="toggle-long" onClick = {()=>setToggleSecond(!toggleSecond)}>Long-Timer</button>
      </div>
      <div className = "wrapper">
        <Timer 
          type = "SHORT" 
          timerTime = {3}
          breakTime = {2}> 
        </Timer>
        {toggleSecond ?
          <Timer 
            type = "LONG" 
            timerTime = {5}
            breakTime = {2}> 
          </Timer>
          : null
        }
      </div>
    </>
  );
}

export default App;

/*
<Timer timer_type = "SHORT"></Timer>
      <Timer timer_type = "LONG"></Timer>
      <settingsModal/>
*/