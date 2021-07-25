import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Timer from './Timer';
import GeneralSettingsModal from './GeneralSettingsModal.js';

function App(props) {
  const [toggleSecond, setToggleSecond] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [genSettingsObj, setSettingsObj] = useState({
    volume: 1,
    autoStart: false
  });
  const [key, setKey] = useState(0);

  useEffect(()=>{
    console.log("updated settingsObj : ", genSettingsObj);
    setKey(key=>key+1);
  }, [genSettingsObj])

  function applySettings(settingsObj){
    console.log("--Applying general settings - expecting re-rendering--")
    setSettingsObj(settingsObj)
  }

  return (
    <>
      <div className="header">
        <span className="title">Pomodoro Timer Plus+</span>
        <div>
          <button className="toggle-long" onClick = {()=>setToggleSecond(!toggleSecond)}>Long-Timer</button>
          <button className="button secondary" id="settings" onClick = {()=>setModalOpen(true)}>Settings</button>
        </div>
      </div>
      <div className = "wrapper">
        <Timer 
          key = {key}
          type = "SHORT" 
          genSettings = {Object.assign({}, genSettingsObj, 
            {timerTime:3, breakTime:2})}>
        </Timer>
        {toggleSecond ?
          <Timer 
            key = {key + 2} // if set to key + 1, React confuses short timer with long timer whenever key is incremented
            type = "LONG" 
            genSettings = {Object.assign({}, genSettingsObj, 
              {timerTime:5, breakTime:3})}> 
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