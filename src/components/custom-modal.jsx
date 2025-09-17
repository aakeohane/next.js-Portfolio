import gsap from "gsap";
import styles from "./custom-modal.module.css"
import { useRef, useContext } from 'react';
import { FaWindowClose } from "react-icons/fa";
import Modal from 'react-modal'; 
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ModalContext } from "@/app/context/provider";

const CustomModal = ( { children } ) => {


  Modal.setAppElement('#modal-root-id')
  const {isOpen, openModal, closeModal } = useContext(ModalContext);

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


      gsap.fromTo(
        "#myModal",
        {autoAlpha: 0 },
        {autoAlpha: 1  }
      )

      gsap.to("#myModal", {
        maskPosition: "100% 0%",
        ease: 'steps(24)',
        duration: 2
      })
      
      gsap.fromTo(
        exRef.current,
        {autoAlpha: 0},
        {autoAlpha: 1, delay: .25}
      )
      
    }
    // Animation for closing the modal
    else {

      gsap.fromTo(
          ".my-overlay",
          {autoAlpha: 0 },
          {autoAlpha: 1, delay: 2  }
        )

      gsap.fromTo(
        "#myModal", 
        {maskPosition: "100% 0%"},
        {maskPosition: "0% 0%", ease: 'steps(24)', duration: 2}
      )

      // gsap.fromTo(
      //   "#myModal",
      //   {autoAlpha: 1 },
      //   {autoAlpha: 0, delay: 5 }
      // )

      // gsap.to(
      //   "#myModal",
      //   {autoAlpha: 0, duration: 5  }
      // )
      
      // gsap.fromTo(
      //   exRef.current,
      //   {autoAlpha: 1},
      //   {autoAlpha: 0,}
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
    }, 2000); // Adjust the delay as needed

  }


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
            <div className={styles["topright"]} onClick={onModalHide} ref={exRef}>
              <FaWindowClose size={28}/>
            </div>
              {children}
        </Modal>
        

    </div>
  );
}
export default CustomModal

