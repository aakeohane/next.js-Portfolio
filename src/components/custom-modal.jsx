'use client'

import { createPortal } from "react-dom";
import styles from "./custom-modal.module.css"
import { useRouter } from "next/navigation";
import { useEffect, useRef } from 'react';
import { FaWindowClose } from "react-icons/fa";

import Modal from 'react-modal';


const CustomModal = ( { children } ) => {

  Modal.setAppElement('#modal-root-id')
  
  const modalRef = useRef(null)
  const router = useRouter();

  
  function onModalOpen() {
    // prevents body scroll
    document.body.style.overflow = "hidden";
  }
        

  function onModalHide() {
    router.back()
    // turns body scroll back on
    document.body.style.overflow = "auto";
  }

  function onBackButtonPress() {
    // turns body scroll back on when user clicks the back button
    document.body.style.overflow = "auto";
  }


  return (
    
    <Modal
      ref={modalRef}
      className={styles["my-modal"]}
      isOpen={!modalRef.current?.open}
      onAfterOpen={onModalOpen}
      onAfterClose={onBackButtonPress}
      contentLabel="Work Modal"
      onRequestClose={onModalHide}
    > 
      <div
        className={styles["topright"]}
        onClick={onModalHide}
      >
        <FaWindowClose size={28}/>
      </div>
        {children}
    </Modal>
  );
}

export default CustomModal

