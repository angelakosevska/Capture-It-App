import { useState } from "react";
import "./style.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const InvitePeople = ()=>{

    const [modalIsOpen, setIsOpen]= useState(false);

    function openModal(){
        setIsOpen(true);
    }
    function afterOpenModal(){

    
    }

    return(

        <>
        <button onClick={openModal}>Invite People</button>
        
        </>
    )


}

export default InvitePeople; 