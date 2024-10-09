'use client'

import gsap from "gsap";
import styles from "./custom-modal.module.css"
import { useRef, useState, createContext, useEffect, useLayoutEffect } from 'react';
import { FaWindowClose } from "react-icons/fa";


import Modal from 'react-modal'; 
import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";

const ModalContext = createContext()

const CustomModal = ( { children } ) => {

  Modal.setAppElement('#modal-root-id')
  const [modalOpen, setModalOpen] = useState(false)

  const router = useRouter()
  
  
  const exRef = useRef(null)
  const modalRef = useRef(null)

  useGSAP(() => {

    if (modalOpen) {
      gsap.fromTo(
        "#myModal",
        {autoAlpha:1, x: -400 },
        {autoAlpha: 1, x: 0, duration: 2 }
      ),
      gsap.fromTo(
        exRef.current,
        {autoAlpha: 0},
        {autoAlpha: 1, delay: 1.75}
      )

    }

    // Animation for closing the modal
    else {
      gsap.to(
        "#myModal",
        { opacity: 0, scale: 0.9, duration: 0.3, ease: 'back.in' }
      )
    };
  }, [modalOpen]);

  
  function onModalOpen() {
    // prevents body scroll
    // this is done twice to be sure body is not scrollable, other instance is onClick of LINK in workcard.jsx
    document.body.style.overflow = "hidden";
    setModalOpen(!modalOpen)
  }
        

  function onModalHide() {
    setModalOpen(!modalOpen)
    console.log("clicked")
    // turns body scroll back on
    document.body.style.overflow = "auto";
    // Delay the navigation until after the modal transition
    setTimeout(() => {
      router.back();
    }, 300); // Adjust the delay as needed

  }

  



  return (
      <Modal
        ref={modalRef}
        className={styles["my-modal"]}
        overlayClassName="my-overlay"
        id="myModal"
        isOpen={!modalRef.current?.open}
        onAfterOpen={onModalOpen}
        contentLabel="Work Modal"
        onRequestClose={onModalHide}
        
      > 
        <div
          className={styles["topright"]}
          onClick={onModalHide}
          ref={exRef}
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

