import gsap from "gsap";
import styles from "./custom-modal.module.css"
import { useRef, useContext, useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import Modal from 'react-modal'; 
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ModalContext } from "@/app/context/provider";

const CustomModal = ( { children, width, height } ) => {

  const [dynamicWidth, setDynamicWidth] = useState('')
  const [dynamicHeight, setDynamicHeight] = useState('')

  const frameProportion = 1.78, //png frame aspect ratio
  frames = 30, //number of png frames
  resize = false;

  console.log(width, height)

  Modal.setAppElement('#modal-root-id')
  const {isOpen, openModal, closeModal } = useContext(ModalContext);

  const router = useRouter()

  const exRef = useRef(null)
  const modalRef = useRef(null)
  const overlayRef = useRef(null)

  const setOverlayRef = (node) => {
    overlayRef.current = node;
    // You can now access the overlay DOM node via overlayRef.current
    if (overlayRef.current) {
      
      overlayRef.current.id = 'myOverlay';
    }
  };


  const body = document.getElementById('bodyEl')


  // nifty aria trick to actually remove body scroll when using phone on safari, EVERYTHING else does not work
  // usePreventScroll()

  gsap.config({
    nullTargetWarn: false,
  });

  useGSAP(() => {
    const transitionLayer = document.getElementById("transitionLayer");

    if (isOpen) {
      // Show the transition layer and animate the background
      transitionLayer.style.display = "block";
      gsap.fromTo(
        "#transitionLayer",
        { backgroundPosition: "0% 0%" }, // Start position
        {
          backgroundPosition: "100% 0%", // End position
          ease: "steps(30)",
          duration: 1,
          onComplete: () => {
            // Hide the transition layer after the animation
            transitionLayer.style.display = "none";
          },
        }
      );
    } else {
      // Show the transition layer and reverse the animation
      transitionLayer.style.display = "block";
      gsap.fromTo(
        "#transitionLayer",
        { backgroundPosition: "100% 0%" }, // Start position
        {
          backgroundPosition: "0% 0%", // End position
          ease: "steps(30)",
          duration: 1,
          onComplete: () => {
            // Hide the transition layer after the animation
            transitionLayer.style.display = "none";
          },
        }
      );
    }
  }, [isOpen]);
        

  function onModalHide(backButton) {
    closeModal()
    // Delay the navigation until after the modal transition
    setTimeout(() => {
      if (backButton) {
        // closeModal()
        router.back();
      }
      // turns body scroll back on
      body.style.overflow = 'auto';
    },2000); // Adjust the delay as needed

  }


  return (
      <div className={styles["modal-container"]}>
        <div id="transitionLayer" className={styles["transition-layer"]}></div>
        <Modal
          ref={modalRef}
          className={styles["my-modal"]}
          id="myModal"
          isOpen={isOpen}
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
    </div>
  );
}
export default CustomModal

