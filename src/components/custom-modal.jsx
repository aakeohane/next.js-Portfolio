'use client'

import { createPortal } from "react-dom";
import styles from "./custom-modal.module.css"
import { useRouter } from "next/navigation";
import { useEffect, useRef } from 'react';
import { FaWindowClose } from "react-icons/fa";


const Modal = ( { children } ) => {
  
  const modalRef = useRef(null)
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal()
      // prevents body scroll
      document.body.style.overflow = "hidden";
    }
  }, [])

  function onModalHide() {
    router.back()
    // turns body scroll back on
    document.body.style.overflow = "auto";
  }


  return createPortal(
    
    <dialog
      ref={modalRef}
      className={styles["my-modal"]}
      // isOpen={!modalRef.current?.open}
      // onRequestClose={() => router.back('/', undefined, { shallow: true })}
      contentLabel="Work Modal"
      onRequestClose={onModalHide}
    > 
    <div
      className={styles["topright"]}
      onClick={onModalHide}
    ><FaWindowClose size={28}/></div>
        {children}
    </dialog>, document.getElementById("modal-root-id")
  );
}

export default Modal

