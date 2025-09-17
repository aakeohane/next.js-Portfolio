import gsap from "gsap";
import styles from "./custom-modal.module.css"
import { useRef, useContext } from 'react';
import { FaWindowClose } from "react-icons/fa";
import Modal from 'react-modal'; 
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ModalContext } from "@/app/context/provider";
import { createPortal } from "react-dom";

const CustomModal = ( { children } ) => {


  Modal.setAppElement('#modal-root-id')
  const {isOpen, openModal, closeModal } = useContext(ModalContext);

  const router = useRouter()

  const exRef = useRef(null)
  const modalRef = useRef(null)
  const overlayRef =useRef(null)

  const body = document.getElementById('bodyEl')

  const setOverlayRef = (node) => {
    overlayRef.current = node;
    // You can now access the overlay DOM node via overlayRef.current
    if (overlayRef.current) {
      
      overlayRef.current.id = 'myOverlay';
    }
  };


  // nifty aria trick to actually remove body scroll when using phone on safari, EVERYTHING else does not work
  // usePreventScroll()

  gsap.config({
    nullTargetWarn: false,
  });

  useGSAP(() => {

    if (isOpen) {
      
      gsap.fromTo(
        "#myModal",
        {autoAlpha: 0 },
        {autoAlpha: 1, delay: 1.4  }
      )
      // gsap.fromTo(
      //   exRef.current,
      //   {autoAlpha: 0},
      //   {autoAlpha: 1, delay: .25}
      // )

      gsap.to("#bgLayer", {
        xPercent: -100,
        ease: "steps(25)",
        duration: 1.5
      }
      )
    
      
    }
    // Animation for closing the modal
    else {

      // gsap.fromTo(
      //   "#myModal",
      //   {autoAlpha: 1, xPercent: 0 },
      //   {autoAlpha: 1, xPercent: 120, ease: 'expo.out'  }
      // )
    };
  }, [isOpen]);
        

  function onModalHide(backButton) {
    closeModal()
    // Delay the navigation until after the modal transition
    setTimeout(() => {
      if (backButton) {
        router.back();
      }
      // turns body scroll back on
      body.style.overflow = 'auto';
    }, 300); // Adjust the delay as needed

  }


  return createPortal(
    <div className={styles["modal-container"]}>
      { isOpen && 
      <div className={styles["transition-layer"]}>
        <div id="bgLayer" className={styles["bg-layer"]}></div>
      </div>}
        <Modal
          ref={modalRef}
          className={styles["my-modal"]}
          id="myModal"
          isOpen={!modalRef.current?.open}
          onAfterOpen={() => openModal()}
          contentLabel="Work Modal"
          overlayClassName={styles["my-overlay"]}
          onRequestClose={onModalHide}
          onAfterClose={(e) => {onModalHide(e)}}
          overlayRef={setOverlayRef}
        >
            <div className={styles["topright"]} onClick={onModalHide} ref={exRef}>
              <FaWindowClose size={28}/>
            </div>
              {children}
        </Modal>
        

    </div>,
    document.getElementById('modal-root-id')
  );
}
export default CustomModal

