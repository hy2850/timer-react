import React, {useState, useEffect, useRef} from 'react';
import './Timer.css';

import SettingsModal from './SettingsModal.js';
import Modal from 'react-modal';

const MINIUTE = 60;

function Timer(props) {
    let initTime = useRef(props.timerTime); // 초기값 props.settingsObj.timerTime
    let initBreak = 2; // 초기값 props.settingsObj.breakTime

    const [didStart, setDidStart] = useState(false);
    // const [onBreak, setOnBreak] = useState(false);
    let onBreak = false;

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
        if (time == -1) time = onBreak ? initBreak : initTime.current;

        let min = Math.floor(time/MINIUTE); min = min.toString();
        let sec = time%MINIUTE; sec = sec.toString();
        setClock(min.padStart(2, '0') + ":" + sec.padStart(2, '0'));
    }, [curTime])


    // init clock
    useEffect(() => {
        setCurTime(initTime.current);
    }, [])

    // countDown
    useEffect(() => {
        if(didStart){
            if(curTime == -1) setCurTime(onBreak ? initBreak : initTime.current); // starting a new timer

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

    // apply new settings from 'SettingsModal'
    function applySettings(num){
        initTime.current = num;
        reset();
        setCurTime(initTime.current);
    }

    return (
        <>
            <div className = "timerBox" data-short>
                <p id = "timer">{clock}</p>
                <div className = "buttonSet">
                <button className = "button start" onClick = {()=>setDidStart(true)}> Start </button>
                <button className = "button pause" onClick = {()=>reset(true)}> Pause </button>
                <button className = "button reset secondary" onClick = {()=>reset()}> Reset </button>
                <button className = "button settings secondary" data-modal-target = "SHORT" onClick = {()=>setModalOpen(true)}> Settings </button>
                </div>
            </div>

            <SettingsModal 
                isOpen={modalOpen} 
                close={()=>setModalOpen(false)} 
                save={(num)=>applySettings(num)}>
            </SettingsModal>
        </>
    );
}

export default Timer;