import React, {useState} from 'react';

import './styles/App.css';
import Timer from './components/Timer';
import GeneralSettingsModal from './components/GeneralSettingsModal.js';

const MINIUTE = 60;

function App(props) {
  const [toggleSecond, setToggleSecond] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [key, setKey] = useState(0);

  // Initial time settings
  let initTimeObj = { 
    shortTT : 25 * MINIUTE,
    shortBT: 5 * MINIUTE,
    longTT : 50 * MINIUTE,
    longBT: 10 * MINIUTE,
  }; // TT : Timer Time, BT : Break Time

  // General settings - for both timers : volume, autostart, ...
  let genSettingsObj = {
    volume: 1,
    autoStart: false,
    //onNoti: false // controlled by Redux
  };

  // [Cache] Retrieve saved settings from localStorage
  let generalCache = localStorage.getItem('generalSettings-json')
  if (generalCache) genSettingsObj = JSON.parse(generalCache);

  let timeCache = localStorage.getItem('initTimeSettings-json')
  if (timeCache) initTimeObj = JSON.parse(timeCache);
  

  // =============================================================================
  // Called when general settings modal closes
  function applySettings(settingsObj){
    //console.log("--Applying general settings - expecting re-rendering--")

    genSettingsObj = settingsObj;
    localStorage.setItem('generalSettings-json', JSON.stringify(settingsObj)); // cache general settings
    setKey(key=>key+1); // re-render Timer components by changing the key
  }


  // =============================================================================
  // Reset
  function resetAllSettings(){
    if(window.confirm("Reset settings?")){
      localStorage.clear(); 
      document.location.reload(); // reload webpage
    }
  }


  return (
    <>
      <div className="header">
        <span className="title">Pomodoro Timer Plus+</span>
        <div className="main-buttonSet">
          <button onClick = {()=>setToggleSecond(!toggleSecond)}>Long-Timer</button>
          <button onClick = {()=>setModalOpen(true)}>Settings</button>
          <button onClick = {()=>resetAllSettings()}>Reset Settings</button>
        </div>

      </div>
      <div className = "wrapper">
        <Timer 
          key = {key}
          type = "SHORT" 
          settings = {Object.assign({}, genSettingsObj, 
                                        {timerTime:initTimeObj.shortTT, breakTime:initTimeObj.shortBT})}
        >
        </Timer>
        {toggleSecond ?
          <Timer 
            key = {key + 2} // if set to key + 1, React confuses short timer with long timer whenever key is incremented
            type = "LONG" 
            settings = {Object.assign({}, genSettingsObj, 
                                          {timerTime:initTimeObj.longTT, breakTime:initTimeObj.longBT})}
          >
          </Timer>
          : null
        }
      </div>

      <GeneralSettingsModal
        key = {key + 3}
        curSettings={genSettingsObj}
        id="modalTest"
        isOpen={modalOpen} 
        close={()=>setModalOpen(false)} 
        save={(num)=>applySettings(num)}
      >
      </GeneralSettingsModal>
    </>
  );
}

export default App;