import { bebasNeueFontClass } from "@/app/layout"
import Image from "next/image"
import jelly from 'public/images/jelly.png' 
import styles from './contact.module.css'

const Contact = () => {
  
  return (
    <section id="contact" data-section>
      <h1>
        Contact
      </h1>
      <p className={`${bebasNeueFontClass}`}>
        email: aacunty@gmail.com
      </p>
      <Image className={styles["jelly"]}
            alt="personal logo" 
            src={jelly}
            width={350}
            priority={true}
      />
    </section>
  )
}

export default Contact