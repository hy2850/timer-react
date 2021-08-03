import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import Timer from './Timer';
import GeneralSettingsModal from './GeneralSettingsModal.js';

function App(props) {
  const [toggleSecond, setToggleSecond] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Default initTime
  const MINIUTE = 60;
  const INIT_TIME = {
    shortTT : 25 * MINIUTE,
    shortBT: 5 * MINIUTE,
    longTT : 50 * MINIUTE,
    longBT: 10 * MINIUTE,
  }; // TT : Timer Time, BT : Break Time
  const [initTimeObj, setInitTimeObj] = useState(INIT_TIME); // stores initial time settings for both timers


  // =============================================================================
  // [Cache] Retrieve saved settings from localStorage
  useEffect(()=>{
    //localStorage.clear();
    let generalCache = localStorage.getItem('generalSettings-json')
    if (generalCache){
      setSettingsObj(JSON.parse(generalCache));
    }

    let timeCache = localStorage.getItem('initTimeSettings-json')
    if (timeCache){
      setInitTimeObj(initTimeObj => Object.assign({}, initTimeObj, JSON.parse(timeCache)));
    }
  }, []);


  // =============================================================================
  // General settings - for both timers : volume, autostart, ...
  const [genSettingsObj, setSettingsObj] = useState({
    volume: 1,
    autoStart: false
  });
  const [key, setKey] = useState(0);

  useEffect(()=>{
    setKey(key=>key+1); // re-render Timer components by changing the key
    localStorage.setItem('generalSettings-json', JSON.stringify(genSettingsObj)); // cache general settings
  }, [genSettingsObj]);

  // Called when general settings modal closes
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
                                        {timerTime:initTimeObj.shortTT, breakTime:initTimeObj.shortBT})}
          update_initTime = {setInitTimeObj}
        >
        </Timer>
        {toggleSecond ?
          <Timer 
            key = {key + 2} // if set to key + 1, React confuses short timer with long timer whenever key is incremented
            type = "LONG" 
            settings = {Object.assign({}, genSettingsObj, 
                                          {timerTime:initTimeObj.longTT, breakTime:initTimeObj.longBT})}
            update_initTime = {setInitTimeObj}
          >
          </Timer>
          : null
        }
      </div>

      <GeneralSettingsModal
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