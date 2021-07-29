import React, {useState, useEffect} from 'react';

export default function WritableClock() {
    const [minWriteFlag, setMinWriteFlag] = useState(false);
    const [secWriteFlag, setSecWriteFlag] = useState(false);
    const [min, setMin] = useState("00");
    const [sec, setSec] = useState("00");
    const [tmp, setTmp] = useState("");

    const MIN = 0, SEC = 1;

    function startWriting(target){
        setTmp(target === MIN ? min : sec); 
        target === MIN ? setMinWriteFlag(true) : setSecWriteFlag(true);
    }

    // Focus
    useEffect(()=>{
        let elem = document.getElementById("minWrite")
        if(elem) elem.focus();
    }, [minWriteFlag]);
    useEffect(()=>{
        let elem = document.getElementById("secWrite")
        if(elem) elem.focus();
    }, [secWriteFlag]);

    
    function applyChange(target){
        const type = (target===MIN ? "Minute" : "Second");
        let num = parseInt(tmp);
        if(!isNaN(num) && (0 <= num && num < (target === MIN ? 100 : 60))){
            console.log(`Changing ${type} from ${min} to ${num}`); // DEBUG

            num = String(num);
            if(num.length === 1) num = "0" + num;

            if(target === MIN){
                setMin(num);
            }
            else{
                setSec(num);
            }
        } 
        else{
            alert(`${type} must be a number between 0 to ${target===MIN ? 99 : 59}`);
        }

        target === MIN ? setMinWriteFlag(false) : setSecWriteFlag(false);
    }

    return (
        <div>
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
