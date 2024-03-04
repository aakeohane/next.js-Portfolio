
import Image from "next/image";
import { useRouter } from "next/router";
import Modal from 'react-modal';
import styles from "./custom-modal.module.css"



export function CustomModal( { children } ) {

  Modal.setAppElement('#__next');

  const router = useRouter();

  return (
    <Modal
      className={styles["my-modal"]}
      isOpen={!!router.query.slug}
      onRequestClose={() => router.push('/', undefined, { scroll: false })}
      contentLabel="Work Modal"
    >
      
        {children}
      
      {/* <Image
        alt="example" 
        src={image}
        sizes="100vw"
        style={{
          width: '50%',
          height: 'auto',
          margin: '3px 0 3px 0'
        }}
        width={300}
        height={100}
      /> */}
    </Modal>
  );
}

