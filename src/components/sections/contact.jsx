import { bebasNeueFontClass } from "@/app/layout"
import Image from "next/image"
import jelly from 'public/images/jelly.png' 
import nauti from 'public/images/nautilus-v1.png'

const Contact = () => {
  
  return (
    <section id="contact" data-section>
      <h1>
        Contact
      </h1>
      <p className={`${bebasNeueFontClass}`}>
        email: aacunty@gmail.com
      </p>
      <Image
            alt="personal logo" 
            src={jelly}
            width={350}
            priority={true}
      />
      <Image
            alt="personal logo" 
            src={nauti}
            width={350}
            priority={true}
      />
    </section>
  )
}

export default Contact