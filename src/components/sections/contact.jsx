import Image from "next/image"
import jelly from 'public/images/jelly.png' 

const Contact = () => {
  
  return (
    <section id="contact" data-section>
      <h1>
        Contact
      </h1>
      <p>
        email: aacunty@gmail.com
      </p>
      <Image
            alt="personal logo" 
            src={jelly}
            width={350}
            priority={true}
      />
    </section>
  )
}

export default Contact