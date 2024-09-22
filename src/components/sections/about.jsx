import styles from './about.module.css'
import Image from 'next/image';
import profilePicFisheye from 'public/images/professional-portrait-v3-fisheye.png'

import { bebasNeueFontClass } from "@/app/layout"

const About = () => {

  return (
    <section id="about" data-section className={"content-container"}>
      <div className={styles["portrait-container"]}>
        <div className={styles["drop"]}>
          <Image
            alt="personal logo" 
            src={profilePicFisheye}
            className={styles["portrait"]}
            height={350}
            priority={true}
            id="portrait"
          />
        </div>
        <div className={styles["drop"]}></div>
        <div className={styles["drop"]}></div>
        <div className={styles["drop"]}></div>
      </div>
      <h1>How did I know I was destined for coding?</h1>
      <p className={`${bebasNeueFontClass}`}>
        I am always the first to google the moment someone asks a question.
        Besides my googling talent, my academic background in the sciences 
        has prepared me to problem solve, critically evaluate, and think 
        imaginatively when facing technical challenges. Thankfully, my seemingly 
        perpetual need to know is the perfect characteristic for someone in the 
        tech field and I am ready to keep on learning! I aim to inspire positive 
        environmental change through my work. I love the ocean, typography and 
        living a zero waste lifestyle. When I'm not obsessing about responsive 
        design, you can find me on the tennis courts. Take a peak at my CV below.
      </p>
    </section>
  )
}

export default About