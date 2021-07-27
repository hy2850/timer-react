import React, {useState, useEffect, useRef} from 'react';
import './Timer.css';

import TimeSettingsModal from './TimeSettingsModal.js';

import BEEP from './beep.mp3'
import BELL from './bell.mp3'

const MINIUTE = 60;

function Timer(props) {
    //let settings = useRef(props.settingsObj)
    let initTime = useRef(props.settings.timerTime); // 초기값 props.settingsObj.timerTime
    let initBreak = useRef(props.settings.breakTime); // 초기값 props.settingsObj.breakTime
    let alarmVol = useRef(props.settings.volume); // 초기값 props.settingsObj.volume
    let autoStart = useRef(props.settings.autoStart); // 초기값 props.settingsObj.autoStart

    const [didStart, setDidStart] = useState(false);
    // const [onBreak, setOnBreak] = useState(false);
    let onBreak = useRef(false);

    const [curTime, setCurTime] = useState(-1); // -1 for starting a new timer / else resume paused timer
    const [clock, setClock] = useState("00:00");
    
    const [modalOpen, setModalOpen] = useState(false);


    //======================================================
    // Update clock
    useEffect(() => {
        // ===================================================
        // DEBUGGING
        // console.log(`Timer ${props.timer_type} : ${curTime}`);
        // ===================================================
        let time = curTime;
        if (time == -1) time = onBreak.current ? initBreak.current : initTime.current;

        let min = Math.floor(time/MINIUTE); min = min.toString();
        let sec = time%MINIUTE; sec = sec.toString();
        setClock(min.padStart(2, '0') + ":" + sec.padStart(2, '0'));
    }, [curTime]);


    // init clock & set keyboard keydown
    useEffect(() => {
        //console.log("Timer Init) props : ", props.genSettings)
        setCurTime(initTime.current);

        document.addEventListener('keydown', keydownEvents);
        return ()=>document.removeEventListener('keydown', keydownEvents);
    }, []);
    
    const keydownEvents = (evt)=>{
        if(evt.code === 'Space')
            setDidStart(didStart => !didStart);
        else if (evt.code === 'KeyR')
            reset();
    };


    // countDown
    useEffect(() => {
        if(didStart){
            if(curTime == -1) setCurTime(onBreak.current ? initBreak.current : initTime.current); // starting a new timer

            const refreshInterval = setInterval(() => {
                if(curTime == 0) {
                    beep();
                    onBreak.current = !onBreak.current; // toggle break status
                    reset();
                    if (onBreak.current) setDidStart(true); // start break
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
            //onBreak.current = false;
            setCurTime(-1);
        }
    }


    function beep() {
        // console.log(props.bell);
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


    // apply new settings from 'SettingsModal'
    function applyTimeSettings(timeObj){
        initTime.current = timeObj.timerTime;
        initBreak.current = timeObj.breakTime;
        reset();
        setCurTime(initTime.current);
        
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
        window.localStorage.setItem(key, JSON.stringify(cachedTimeObj)); // cache time settings
    }

    return (
        <>
            <div className = "timerBox" data-short>
                <span id = "breakNotify">{onBreak.current ? "(on Break)" : " "}</span>
                <p id = "timer">{clock}</p>
                <div className = "buttonSet">
                    <button className = "button" id="start" onClick = {()=>setDidStart(true)}> Start </button>
                    <button className = "button" id="pause" onClick = {()=>reset(true)}> Pause </button>
                    <button className = "button secondary" id="reset" onClick = {()=>reset()}> Reset </button>
                    <button className = "button secondary" id="timeSettings" data-modal-target = "SHORT" onClick = {()=>setModalOpen(true)}> Time </button>
                </div>
            </div>

            <TimeSettingsModal 
                isOpen={modalOpen} 
                close={()=>setModalOpen(false)} 
                save={(timeObj)=>applyTimeSettings(timeObj)}>
            </TimeSettingsModal>
        </>
    );
}

export default Timer;