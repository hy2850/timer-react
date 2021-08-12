import React, {useState, useEffect, useRef} from 'react';
import '../styles/Timer.css';

import TimeSettingsModal from './TimeSettingsModal.js';
import WritableClock from './WritableClock';

import BEEP from '../sound/beep.mp3'
import BELL from '../sound/bell.mp3'

const MINIUTE = 60;

function Timer(props) {
    // Options - preserve with useRef 
    let initTime = useRef(props.settings.timerTime); // 초기값 props.settingsObj.timerTime
    let initBreak = useRef(props.settings.breakTime); // 초기값 props.settingsObj.breakTime
    let alarmVol = useRef(props.settings.volume); // 초기값 props.settingsObj.volume
    let autoStart = useRef(props.settings.autoStart); // 초기값 props.settingsObj.autoStart

    // States for timer
    const [curTime, setCurTime] = useState(-1); // -1 for starting a new timer / else resume paused timer
    const [didStart, setDidStart] = useState(false);
    const [onBreak, setBreak] = useState(false);

    // Etc
    const [modalOpen, setModalOpen] = useState(false);
    const [key, setKey] = useState(0); // to re-render child component writableClock.js

    
    //======================================================
    // Update clock
    useEffect(() => {
        if(curTime == -1) setCurTime(onBreak ? initBreak.current : initTime.current); // starting a new timer
        setKey(key => key + 1); // re-render writableClock
    }, [curTime]);


    // init clock & set keyboard keydown
    useEffect(() => {
        setCurTime(initTime.current);

        document.addEventListener('keydown', keydownEvents);
        return ()=>document.removeEventListener('keydown', keydownEvents);
    }, []);

    const keydownEvents = (evt)=>{
        if(evt.code === 'Space')
            setDidStart(didStart => !didStart);
        else if (evt.code === 'KeyR'){
            if(evt.ctrlKey){
                evt.preventDefault(); // remove 'Ctrl+R' reload page
                setBreak(false);
            }
            reset();
        }
    };


    // =============================================================================
    // countDown
    useEffect(() => {
        if(didStart){
            const refreshInterval = setInterval(() => {
                if(curTime === 0) {
                    beep();
                    setBreak(onBreak => !onBreak); // toggle break status
                    reset();
                    if (onBreak) setDidStart(true); // start break
                    else if (autoStart.current) setDidStart(true); // option : autostart (Inf Loop? Stack?)
                    return;
                }
                setCurTime(curTime => curTime-1);        
            }, 1000);
            return () => clearInterval(refreshInterval);
        }
    }, [didStart, curTime]);


    function reset(doPause = false){
        console.log(doPause ? "Pausing" : "Resetting");
        setDidStart(false);
    
        // resetting, not pause
        if(!doPause) {
            //if(onBreak.current) onBreak.current = false; // messes-up break mode
            setCurTime(-1);
        }
    }


    function beep() {
        let audio = new Audio(props.type === 'SHORT' ? BEEP : BELL);   

        audio.volume = alarmVol.current; // option

        let playCnt = 1;
        audio.addEventListener('ended', async function() {
            playCnt++;
            if(playCnt >= 1) return;
            
            await new Promise(r => setTimeout(r, 300)); // sleep
            
            this.currentTime = 0;
            this.play();
        }, false);
        audio.play(); 
    }

    // =============================================================================
    // apply new settings from 'SettingsModal'
    function applyTimeSettings(timeObj){
        initTime.current = timeObj.timerTime;
        initBreak.current = timeObj.breakTime;
        reset();
        setCurTime(onBreak ? initBreak.current : initTime.current);
        
        // Update initTime and cache
        const key = 'initTimeSettings-json';
        let cachedTimeObj = JSON.parse(localStorage.getItem(key));
        if(props.type === "SHORT"){
            cachedTimeObj = Object.assign({}, cachedTimeObj, {
                shortTT : timeObj.timerTime,
                shortBT : timeObj.breakTime
            });
        }
        else{
            cachedTimeObj = Object.assign({}, cachedTimeObj, {
                longTT : timeObj.timerTime,
                longBT : timeObj.breakTime
            });
        }
        props.update_initTime(initTimeObj => Object.assign({}, initTimeObj, cachedTimeObj)); // also update 'initTimeObj' state in App.js
        window.localStorage.setItem(key, JSON.stringify(cachedTimeObj)); // cache time settings
    }

    // Apply updates from writableClock (initTime setting and localStorage cache)
    // Can only update timerTime or breakTime at a time (depends on 'onBreak' flag)
    function updateFromClock(time){
        let timeObj = {
            timerTime : initTime.current,
            breakTime : initBreak.current
        }
        if(onBreak){
            Object.assign(timeObj, {breakTime : time});
        }
        else{
            Object.assign(timeObj, {timerTime : time});
        }

        applyTimeSettings(timeObj);
    }

    function toggleBreak(){
        setBreak(onBreak=>!onBreak);
        reset(false);
    }

    return (
        <div className = "timerNswitch">
            <div className = "timerBox">
                <span id = "breakNotify">{onBreak ? "(on Break)" : " "}</span>
                <br/>
                <p>
                    <WritableClock
                        key={key}
                        time={curTime}   
                        pause={()=>reset(true)} // pause
                        update={(time)=>updateFromClock(time)}
                    ></WritableClock>
                </p>
                <br/>
                <div className = "buttonSet">
                    <button className = "button" id="start" onClick = {()=>setDidStart(true)}> Start </button>
                    <button className = "button" id="pause" onClick = {()=>reset(true)}> Pause </button>
                    <button className = "button secondary" id="reset" onClick = {()=>reset()}> Reset </button>
                    <button className = "button secondary" id="timeSettings" data-modal-target = "SHORT" onClick = {()=>setModalOpen(true)}> Time </button>
                </div>
            </div>

            <label className="switch">
                <input type="checkbox" onClick={()=>toggleBreak()} checked={onBreak}></input>
                <span className="slider round"></span>
            </label>

            <TimeSettingsModal 
                type={props.type}
                isOpen={modalOpen} 
                close={()=>setModalOpen(false)} 
                save={(timeObj)=>applyTimeSettings(timeObj)}>
            </TimeSettingsModal>
        </div>
    );
}

export default Timer;