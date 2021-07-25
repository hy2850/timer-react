import React, {useState, useEffect, useRef} from 'react';
import './SettingsModal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function SettingsModal(props) {
    const [timerMin, setTimerMin] = useState(25);
    const [breakMin, setBreakMin] = useState(5);
    const [vol, setVol] = useState(1);
    const [autoStart, setAutoStart] = useState(false);
    
    //----------------DEBUG-----------------------
    useEffect(()=>{
        console.log(timerMin);
    }, [timerMin]);
    useEffect(()=>{
        console.log(breakMin);
    }, [breakMin]);
    useEffect(()=>{
        console.log(vol);
    }, [vol]);
    useEffect(()=>{
        console.log(autoStart);
    }, [autoStart]);
    //--------------------------------------------

    function saveSettings(){
        alert("Settings saved");
        const settingsObj = {
            timerTime: timerMin,
            breakTime: breakMin,
            volume: vol,
            autoStart: autoStart,
        }
        props.save(settingsObj);
        props.close();
    }

    return (
        <Modal 
            className="modal" 
            closeTimeoutMS={200}
            isOpen={props.isOpen} 
            onRequestClose={props.close}>
            <div className="modal" id="modal" >
                <div className="modal-header">
                    <span className="title">Pomodoro Settings</span>
                    <button className="close-button" onClick={props.close}> &times; </button>
                </div>

                <div className="modal-body">  
                    <form onSubmit={saveSettings}>
                        <div className="settings">
                            <div className="settings-container-checkbox">
                                <label>
                                    <input type="checkbox" 
                                        checked={autoStart} 
                                        onChange={()=>{setAutoStart(autoStart=>!autoStart);}}>
                                    </input> Auto start timers and breaks?
                                </label>
                            </div>
                            
                            <br/>

                            <div className="settings-container-slider">
                                Select alarm volume
                                <input className="slider" id="volume" type="range" min="0" max="1" step="0.01" 
                                onChange={(evt)=>{setVol(evt.target.value);}}></input>
                            </div>

                            <br/>

                            <div className="settings-container-time">
                                <label>
                                    Timer &nbsp;
                                    <input id="time" type="number" step="5" min="0" max="99" 
                                            value={timerMin} 
                                            onChange={(evt)=>{setTimerMin(evt.target.value);}}/>
                                </label>

                                <label>
                                    Break &nbsp;
                                    <input id="time" type="number" step="5" min="0" max="99" 
                                            value={breakMin} 
                                            onChange={(evt)=>{setBreakMin(evt.target.value);}}/>
                                </label>
                            </div>
                        </div>
                        <input className="settings-save" type="submit" value="Submit" />
                        <input className="settings-save" type="reset" value="Reset" />
                    </form>
                </div>
            </div>
        </Modal>
    )
}