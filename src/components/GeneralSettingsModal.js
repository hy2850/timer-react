import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { turnOn, turnOff } from '../slices/notiSlice';
import '../styles/SettingsModal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function GeneralSettingsModal(props) {
    const [vol, setVol] = useState(props.curSettings.volume);
    const [autoStart, setAutoStart] = useState(props.curSettings.autoStart);
    
    // Redux
    const onNoti = useSelector(state => state.onNoti);
    const dispatch = useDispatch();

    // set keyboard keydown
    useEffect(() => {
        document.addEventListener('keydown', keydownEvents);
        return ()=>document.removeEventListener('keydown', keydownEvents);
    });
    
    const keydownEvents = (evt)=>{
        if(props.isOpen && (evt.code === 'Space' || evt.code === 'Enter')){ // only when the modal is opened
            evt.preventDefault();
            saveSettings();
        }
    };

    function saveSettings(evt=null){
        if(evt) evt.preventDefault();

        alert("Settings saved");
        const settingsObj = {
            volume: Number.parseFloat(vol),
            autoStart: autoStart,
            //onNoti: onNoti
        }
        props.save(settingsObj);
        props.close();
    }

    function checkPermission(){
        // Check off - Turn off notification
        if(onNoti){
            dispatch(turnOff());
        }
        // Check on - Turn on the notification, ask for permission if not granted yet 
        else{
            if(Notification.permission !== "granted"){
                Notification.requestPermission().then(permission => {
                    if(permission === "granted"){
                        console.log("Permission granted");
                        dispatch(turnOn());
                    }
                    else console.log("Permission denied");
                })
            }
            else{
                dispatch(turnOn());
            }
        }
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
                                <label>
                                    <input type="checkbox" 
                                        checked={onNoti} 
                                        onChange={()=>{checkPermission()}}>
                                    </input> Send notification when the timer is over
                                </label>
                            </div>
                            
                            <br/>

                            <div className="settings-container-slider">
                                Select alarm volume
                                <input className="slide" id="volume" type="range" min="0" max="1" step="0.01" 
                                value={vol}
                                onChange={(evt)=>{setVol(evt.target.value);}}></input>
                            </div>
                        </div>
                        <input className="settings-save" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </Modal>
    )
}