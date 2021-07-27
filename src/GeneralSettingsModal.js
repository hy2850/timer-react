import React, {useState, useEffect, useRef} from 'react';
import './SettingsModal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function GeneralSettingsModal(props) {
    const [vol, setVol] = useState(1);
    const [autoStart, setAutoStart] = useState(false);

    // set keyboard keydown
    useEffect(() => {
        document.addEventListener('keydown', keydownEvents);
        return ()=>document.removeEventListener('keydown', keydownEvents);
    }, [props.isOpen]);
    
    const keydownEvents = (evt)=>{
        if(props.isOpen && (evt.code === 'Space' || evt.code === 'Enter')) // only when the modal is opened
            saveSettings();
    };
    


    function saveSettings(evt=null){
        if(evt) evt.preventDefault();

        alert("Settings saved");
        const settingsObj = {
            volume: Number.parseFloat(vol),
            autoStart: autoStart,
        }
        props.save(settingsObj);
        props.close();
    }

    return (
        <Modal 
            className="modal" 
            id="general"
            closeTimeoutMS={200}
            isOpen={props.isOpen} 
            onRequestClose={props.close}>
            <div className="modal" id="general" >
                <div className="modal-header">
                    <span className="title">General Settings</span>
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
                        </div>
                        <input className="settings-save" type="submit" value="Submit" />
                        <input className="settings-save" type="reset" value="Reset" />
                    </form>
                </div>
            </div>
        </Modal>
    )
}