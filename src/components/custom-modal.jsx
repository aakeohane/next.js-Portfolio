'use client'

import gsap from "gsap";
import styles from "./custom-modal.module.css"
import { useRef, useState, useContext } from 'react';
import { FaWindowClose } from "react-icons/fa";
import Modal from 'react-modal'; 
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ModalContext } from "@/app/context/provider";


const CustomModal = ( { children } ) => {


  Modal.setAppElement('#modal-root-id')
  const [modalOpen, setModalOpen] = useState(false)
  const {isOpen, openModal, closeModal } = useContext(ModalContext);

  const router = useRouter()

  const exRef = useRef(null)
  const modalRef = useRef(null)


  gsap.config({
    nullTargetWarn: false,
  });

  useGSAP(() => {

    if (modalOpen) {
      
      gsap.fromTo(
        "#myModal",
        {autoAlpha: 1, x: -400 },
        {autoAlpha: 1, x: 0, duration: 1, ease: 'expo.in'  }
      )
      gsap.fromTo(
        exRef.current,
        {autoAlpha: 0},
        {autoAlpha: 1, delay: .5}
      )
    }
    // Animation for closing the modal
    else {
      gsap.fromTo(
        "#myModal",
        {autoAlpha: 1, x: 0 },
        {autoAlpha: 1, x: -400, ease: 'expo.out'  }
      )
    };
  }, [modalOpen]);

  
  const onModalOpen = () => {
    // prevents body scroll
    // this is done twice to be sure body is not scrollable, other instance is onClick of LINK in workcard.jsx
    document.body.style.overflow = "hidden";
    setModalOpen(!modalOpen)
    openModal()
    console.log(isOpen)
  }
        

  function onModalHide() {
    closeModal()
    setModalOpen(!modalOpen)
    // turns body scroll back on
    // Delay the navigation until after the modal transition
    setTimeout(() => {
      document.body.style.overflow = "auto";
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
          {children}
      </Modal>
  );
}
export default CustomModal

