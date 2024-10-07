'use client'

import styles from "./custom-modal.module.css"
import { useRouter } from "next/navigation";
import { useRef, useState, createContext } from 'react';
import { FaWindowClose } from "react-icons/fa";


import Modal from 'react-modal'; 

const ModalContext = createContext()

const CustomModal = ( { children } ) => {

  Modal.setAppElement('#modal-root-id')
  const [modalOpen, setModalOpen] = useState(false)

  
  const modalRef = useRef(null)
  const router = useRouter();

  
  function onModalOpen() {
    // prevents body scroll
    // this is done twice to be sure body is not scrollable, other instance is onClick of LINK in workcard.jsx
    document.body.style.overflow = "hidden";
    setModalOpen(!modalOpen)
  }
        

  function onModalHide() {
    router.back()
    // turns body scroll back on
    document.body.style.overflow = "auto";
    setModalOpen(!modalOpen)
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
        <ModalContext.Provider value ={{modalOpen}}>
          {children}
        </ModalContext.Provider>
      </Modal>
    
  );
}

export {ModalContext}
export default CustomModal

