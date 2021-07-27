import React, {useState, useEffect, useRef} from 'react';
import './SettingsModal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function TimeSettingsModal(props) {
    const [timerMin, setTimerMin] = useState(25);
    const [breakMin, setBreakMin] = useState(5);
    
    //----------------DEBUG-----------------------
    useEffect(()=>{
        console.log(timerMin);
    }, [timerMin]);
    useEffect(()=>{
        console.log(breakMin);
    }, [breakMin]);
    //--------------------------------------------

    function saveSettings(evt){
        evt.preventDefault();

        const timeObj = {
            timerTime: timerMin,
            breakTime: breakMin,
        }
        props.save(timeObj);
        props.close();
    }

    return (
        <Modal 
            className="modal" 
            id="time"
            closeTimeoutMS={200}
            isOpen={props.isOpen} 
            onRequestClose={props.close}>
            <div className="modal" id="time" >
                <div className="modal-body">  
                    <form onSubmit={saveSettings}>
                        <div className="settings">
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
                        <br/><br/>
                        <input className="settings-save" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </Modal>
    )
}