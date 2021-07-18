import React, {useState, useEffect, useRef} from 'react';
import './SettingsModal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function SettingsModal(props) {
    const [timerMin, setTimerMin] = useState(25);
    
    useEffect(()=>{
        console.log(timerMin);
    }, [timerMin]);
  
    function saveSettings(){
        alert("Settings saved");
        props.save(timerMin);
        props.close();
    }

    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.close}>
            <div className="modal" id="modal" >
                <div className="modal-header">
                    <span className="title">Pomodoro Settings</span>
                    <button className="close-button" onClick={props.close}> &times; </button>
                </div>

                <form onSubmit={saveSettings}>
                    <div className="settings-input-time">
                        <label>
                            Timer
                            <input type="number" step="5" min="0" max="99" 
                                    value={timerMin} 
                                    onChange={(evt)=>{setTimerMin(evt.target.value);}}/>
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </Modal>
    )
}