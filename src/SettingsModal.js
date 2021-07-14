import React from 'react'
import './SettingsModal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function SettingsModal(props) {
    function saveSettings(){
        alert("hello");
        props.save(100);
        props.close();
        alert("bye");
    }

    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.close}>
            This is Modal content
            <button onClick={props.close}> Close </button>

            <button className="settings-save" onClick={saveSettings}>save</button>  
        </Modal>
    )
}