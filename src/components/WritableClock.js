import React, {useState, useEffect, useLayoutEffect} from 'react';
import '../styles/Timer.css';

export default function WritableClock(props) {
    const [minWriteFlag, setMinWriteFlag] = useState(false);
    const [secWriteFlag, setSecWriteFlag] = useState(false);
    const [min, setMin] = useState("00");
    const [sec, setSec] = useState("00");
    const [tmp, setTmp] = useState("");

    const MIN = 0, SEC = 1, MINIUTE = 60;

    // Init time with props.time
    useLayoutEffect(()=>{
        //console.log(`WritableClock is rendering : ${props.time}`);
        let min = Math.floor(props.time/MINIUTE); min = min.toString().padStart(2, '0');
        let sec = props.time%MINIUTE; sec = sec.toString().padStart(2, '0');
        setMin(min); setSec(sec);
    }, []);


    // =============================================================================
    function startWriting(target){
        setTmp(target === MIN ? min : sec); 
        target === MIN ? setMinWriteFlag(true) : setSecWriteFlag(true);
        props.pause();
    }

    // Focus when startWriting
    useEffect(()=>{
        let elem = document.getElementById("minWrite")
        if(elem) elem.focus();
    }, [minWriteFlag]);
    useEffect(()=>{
        let elem = document.getElementById("secWrite")
        if(elem) elem.focus();
    }, [secWriteFlag]);


    // =============================================================================
    // Update valid time change
    function applyChange(target){
        const type = (target===MIN ? "Minute" : "Second");
        let oldT = parseInt(target===MIN ? min : sec);
        let newT = parseInt(tmp);

        // Validation
        if(isNaN(newT)){
            alert(`${type} must be a number between 0 to ${target===MIN ? 99 : 59}`);
        }
        if((0 <= newT && newT < (target === MIN ? 100 : 60)) && oldT !== newT){
            console.log(`Changing ${type} from ${oldT} to ${newT}`); // DEBUG            
            const changedTime = target === MIN ? newT*MINIUTE + parseInt(sec) : parseInt(min)*MINIUTE + newT;            
            props.update(changedTime);
        } 

        target === MIN ? setMinWriteFlag(false) : setSecWriteFlag(false);
    }

    
    return (
        <div id="timer">
            {
                minWriteFlag
                ? <input className="write" id="minWrite" type="text" value={tmp} onChange={(evt)=>{setTmp(evt.target.value)}} onBlur={()=>{applyChange(MIN)}}/>
                : <span className="show" onDoubleClick = {()=>{startWriting(MIN)}}>{min}</span>
            } 
            :
            {
                secWriteFlag
                ? <input className="write" id="secWrite" type="text" value={tmp} onChange={(evt)=>{setTmp(evt.target.value)}} onBlur={()=>{applyChange(SEC)}}/>
                : <span className="show" onDoubleClick = {()=>{startWriting(SEC)}}>{sec}</span>
            } 
        </div>
    )
}
