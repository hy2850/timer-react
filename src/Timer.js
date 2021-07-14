import React, {useState, useEffect} from 'react';
import './Timer.css';

const MINIUTE = 60;

function Timer(props) {
    let initTime = 3; // 초기값 props.settingsObj.timerTime
    let initBreak = 2; // 초기값 props.settingsObj.breakTime

    const [didStart, setDidStart] = useState(false);
    // const [onBreak, setOnBreak] = useState(false);
    let onBreak = false;

    const [curTime, setCurTime] = useState(-1); // -1 for starting a new timer / else resume paused timer
    const [clock, setClock] = useState("00:00");

    //======================================================
    // Update clock
    useEffect(() => {
        // ===================================================
        // DEBUGGING
        console.log(`Timer ${props.timer_type} : ${curTime}`);
        // ===================================================

        let time = curTime;
        if (time == -1) time = onBreak ? initBreak : initTime;

        let min = Math.floor(time/MINIUTE); min = min.toString();
        let sec = time%MINIUTE; sec = sec.toString();
        setClock(min.padStart(2, '0') + ":" + sec.padStart(2, '0'));
    }, [curTime])


    // init clock
    useEffect(() => {
        setCurTime(initTime);
    }, [])

    // countDown
    useEffect(() => {
        if(didStart){
            if(curTime == -1) setCurTime(onBreak ? initBreak : initTime); // starting a new timer

            const refreshInterval = setInterval(() => {
                if(curTime == 0) {
                    // beep(clockIdx);
                    //setOnBreak(!onBreak); // toggle break status
                    reset();
                    //if (onBreak) countDown(); // start break
                    // else (option.autostart) countDonw(clockIdx); // option : autostart (Inf Loop? Stack?)
                    return;
                }
                setCurTime(curTime => curTime-1);        
            }, 1000);
            return () => clearInterval(refreshInterval);
        }
    }, [didStart, curTime])

    function reset(doPause = false){
        // Stop 'setInterval'
        console.log("Resetting");
        setDidStart(false);
    
        // resetting, not pause
        if(!doPause) {
            setCurTime(-1);
        }
    } 

    return (
        <div className = "timerBox" data-short>
            <p id = "timer">{clock}</p>
            <div className = "buttonSet">
            <button className = "button start" onClick = {()=>setDidStart(true)}> Start </button>
            <button className = "button pause" onClick = {()=>reset(true)}> Pause </button>
            <button className = "button reset secondary" onClick = {()=>reset()}> Reset </button>
            <button className = "button settings secondary" data-modal-target = "SHORT"> Settings </button>
            </div>
        </div>
    );
}

export default Timer;