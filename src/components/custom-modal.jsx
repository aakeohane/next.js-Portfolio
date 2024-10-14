'use client'

import gsap from "gsap";
import styles from "./custom-modal.module.css"
import { useRef, useState, useContext, useEffect } from 'react';
import { FaWindowClose } from "react-icons/fa";
import Modal from 'react-modal'; 
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ModalContext } from "@/app/context/provider";
import { usePreventScroll } from "@react-aria/overlays";
// import Image from "next/image";
// import inkBlotLeft from 'public/images/leftside.png'


const CustomModal = ( { children } ) => {


  Modal.setAppElement('#modal-root-id')
  const [modalOpen, setModalOpen] = useState(false)
  const {isOpen, openModal, closeModal } = useContext(ModalContext);

  const router = useRouter()

  const exRef = useRef(null)
  const modalRef = useRef(null)

  const body = document.getElementById('bodyEl')

  usePreventScroll()


  gsap.config({
    nullTargetWarn: false,
  });

  useGSAP(() => {

    if (modalOpen) {
      
      gsap.fromTo(
        "#myModal",
        {autoAlpha: 1, xPercent: -100 },
        {autoAlpha: 1, xPercent: 0, duration: 1, ease: 'expo.in'  }
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
        {autoAlpha: 1, xPercent: 0 },
        {autoAlpha: 1, xPercent: 100, ease: 'expo.out'  }
      )
    };
  }, [modalOpen]);

  
  const onModalOpen = () => {
    // prevents body scroll
    body.style.overflow = 'hidden';
    // this is done twice to be sure body is not scrollable, other instance is onClick of LINK in workcard.jsx
    setModalOpen(!modalOpen)
    openModal()
  }
        

  function onModalHide(backButton) {
    closeModal()
    setModalOpen(!modalOpen)
    // Delay the navigation until after the modal transition
    setTimeout(() => {
      if (backButton) {
        router.back();
      }
      // turns body scroll back on
      body.style.overflow = 'auto';
    }, 300); // Adjust the delay as needed

  }


  return (
      <Modal
        ref={modalRef}
        className={styles["my-modal"]}
        id="myModal"
        isOpen={!modalRef.current?.open}
        onAfterOpen={onModalOpen}
        contentLabel="Work Modal"
        overlayClassName="my-overlay"
        onRequestClose={onModalHide}
        onAfterClose={(e) => {onModalHide(e)}}
      >
          <div className={styles["topright"]} onClick={onModalHide} ref={exRef}>
            <FaWindowClose size={28}/>
          </div>
            {children}
          {/* <div className={styles["ink-blot-left-container"]}>
            <Image
              alt="inkblot left" 
              src={inkBlotLeft}
              width={125}
              className={styles["ink-blot-left"]}
            />
          </div> */}
          {/* <div className="ink-blot-right-container"> */}
            {/* <Image
              alt="inkblot right" 
              src={inkBlotRight}
              width={100}
              className={styles["ink-blot-right"]}
            /> */}
          {/* </div> */}

      </Modal>
  );
}
export default CustomModal

