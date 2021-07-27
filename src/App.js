import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Timer from './Timer';
import GeneralSettingsModal from './GeneralSettingsModal.js';

function App(props) {
  const [toggleSecond, setToggleSecond] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const INIT_TIME = {
    shortTT : 3,
    shortBT: 2,
    longTT : 5,
    longBT: 3,
  }; // TT : Timer Time, BT : Break Time
  let initTimeObj = useRef(INIT_TIME); // stores initial time settings for both timers


  // =============================================================================
  // Retrieve saved settings from localStorage
  useEffect(()=>{
    let generalCache = localStorage.getItem('generalSettings-json')
    if (generalCache){
      setSettingsObj(JSON.parse(generalCache));
    }

    let timeCache = localStorage.getItem('initTimeSettings-json')
    if (timeCache){
      console.log(JSON.parse(timeCache));
      initTimeObj.current = Object.assign(initTimeObj.current, JSON.parse(timeCache));
    }
  }, []);

  
  // =============================================================================
  // General settings
  const [genSettingsObj, setSettingsObj] = useState({
    volume: 1,
    autoStart: false
  });
  const [key, setKey] = useState(0);

  useEffect(()=>{
    //console.log("updated settingsObj : ", genSettingsObj);
    setKey(key=>key+1); // re-render Timer components by changing the key
    localStorage.setItem('generalSettings-json', JSON.stringify(genSettingsObj)); // cache general settings
  }, [genSettingsObj])

  function applySettings(settingsObj){
    //console.log("--Applying general settings - expecting re-rendering--")
    setSettingsObj(settingsObj)
  }

  return (
    <>
      <div className="header">
        <span className="title">Pomodoro Timer Plus+</span>
        <div className="main-buttonSet">
          <button onClick = {()=>setToggleSecond(!toggleSecond)}>Long-Timer</button>
          <button onClick = {()=>setModalOpen(true)}>Settings</button>
          <button onClick = {()=>{localStorage.clear(); alert("cleared!")}}>Reset Cache</button>
        </div>
      </div>
      <div className = "wrapper">
        <Timer 
          key = {key}
          type = "SHORT" 
          settings = {Object.assign({}, genSettingsObj, 
            {timerTime:initTimeObj.current.shortTT, 
            breakTime:initTimeObj.current.shortBT})}
        >
        </Timer>
        {toggleSecond ?
          <Timer 
            key = {key + 2} // if set to key + 1, React confuses short timer with long timer whenever key is incremented
            type = "LONG" 
            settings = {Object.assign({}, genSettingsObj, 
              {timerTime:initTimeObj.current.longTT, 
              breakTime:initTimeObj.current.longBT})}
          >
          </Timer>
          : null
        }
      </div>

      <GeneralSettingsModal
        isOpen={modalOpen} 
        close={()=>setModalOpen(false)} 
        save={(num)=>applySettings(num)}
      >
      </GeneralSettingsModal>
    </>
  );
}

export default App;

/*
<Timer timer_type = "SHORT"></Timer>
      <Timer timer_type = "LONG"></Timer>
      <settingsModal/>
*/