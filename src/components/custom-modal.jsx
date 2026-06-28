import gsap from "gsap";
import styles from "./custom-modal.module.css"
import { useRef, useContext } from 'react';
import Image from "next/image";
import closeIcon from "public/images/x-button.png";
import Modal from 'react-modal'; 
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ModalContext } from "@/app/context/provider";
import { CgEventbrite } from "react-icons/cg";

const CustomModal = ( { children } ) => {

  Modal.setAppElement('#modal-root-id')
  const {isOpen, openModal, closeModal, windowWidth } = useContext(ModalContext);


  console.log(windowWidth)

  const router = useRouter()

  const exRef = useRef(null)
  const modalRef = useRef(null)

  const body = document.getElementById('bodyEl')

  // nifty aria trick to actually remove body scroll when using phone on safari, EVERYTHING else does not work
  // usePreventScroll()

  gsap.config({
    nullTargetWarn: false,
  });

  useGSAP(() => {

    if (isOpen) {

      
      (windowWidth > 1250) ? gsap.fromTo(
        "#myModal", 
        {maskPosition: "0% 0%"},
        {maskPosition: "100% 0%", ease: 'steps(30)', duration: 1.5})
      
        :

        gsap.fromTo(
          "#myModal",
          {autoAlpha: 1, xPercent: -150 },
          {autoAlpha: 1, xPercent: -50, duration: 1, ease: 'expo.in'  }
        )

        gsap.fromTo(
          exRef.current,
          {autoAlpha: 0},
          {autoAlpha: 1, delay: .5}
        )
    }
    // Animation for closing the modal
    else {

      (windowWidth > 1250) ? gsap.fromTo(
        "#myModal", 
        {maskPosition: "100% 0%"},
        {maskPosition: "0% 0%", ease: 'steps(30)', duration: 1.5}
      )

      :

      gsap.fromTo(
        "#myModal",
        { xPercent: -50 },
        { xPercent: 150, duration: 1, ease: 'expo.in'  }
      )
      
      gsap.fromTo(
        exRef.current,
        {autoAlpha: 1},
        {autoAlpha: 0,}
      )
    };
  }, [isOpen]);
        

  function onModalHide(backButton) {
    closeModal()
    // Delay the navigation until after the modal transition
    setTimeout(() => {
      if (backButton) {
        closeModal()
        router.back();
      }
      // turns body scroll back on
      body.style.overflow = 'auto';
    }, 1500); // Adjust the delay as needed
  }

    function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      onModalHide(event);
    }
  };

  return(
    <div id="modalContainer" className={styles["modal-container"]}>
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
        >
          <div role="button" className={styles["closeButton"]} onKeyDown={handleKeyDown} onClick={onModalHide} ref={exRef}>
            <Image
              alt="close icon" 
              src={closeIcon}
              height={35}
              tabIndex={0} 
              className={styles["close-icon"]}
              priority
            />
          </div>
          {children}
        </Modal>
    </div>
  );
}
export default CustomModal

