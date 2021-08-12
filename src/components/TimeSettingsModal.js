import React, {useState, useEffect, useRef} from 'react';
import '../styles/SettingsModal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function TimeSettingsModal(props) {
    const MINUTE = 60;
    const [timerMin, setTimerMin] = useState(props.type === "SHORT" ? 25 : 50);
    const [breakMin, setBreakMin] = useState(props.type === "SHORT" ? 5 : 10);

    // set keyboard keydown
    useEffect(() => {
        if(!props.isOpen) return; // disable keydown when closed

        document.addEventListener('keydown', keydownEvents);
        return ()=>document.removeEventListener('keydown', keydownEvents);
    }, [props.isOpen]);
    
    const keydownEvents = (evt)=>{
        if(props.isOpen && (evt.code === 'Space' || evt.code === 'Enter')) // only when the modal is opened
            saveSettings();
    };


    function saveSettings(evt){
        if(evt) evt.preventDefault();

        const timeObj = {
            timerTime: Number.parseInt(timerMin) * MINUTE,
            breakTime: Number.parseInt(breakMin) * MINUTE
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
                                    <input className="time" type="number" step="5" min="0" max="99" 
                                            value={timerMin} 
                                            onChange={(evt)=>{setTimerMin(evt.target.value);}}/>
                                </label>

                                <label>
                                    Break &nbsp;
                                    <input className="time" type="number" step="1" min="0" max="99" 
                                            value={breakMin} 
                                            onChange={(evt)=>{setBreakMin(evt.target.value);}}/>
                                </label>
                            </div>
                        </div>
                        <input className="settings-save" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </Modal>
    )
}