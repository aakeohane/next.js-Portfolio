import styles from './about.module.css'
import Image from 'next/image';
import profilePicFisheye from 'public/images/professional-portrait-v3-watercolor-v3.png'

import { bebasNeueFontClass } from "@/app/layout"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const About = () => {

//   useGSAP(() => {

//     gsap.registerPlugin(ScrollTrigger);

//     gsap.set("#drop1", {scale: 0})

//     gsap.to("#drop1", {
//       scale: .6,
//       ease: "power1.out", // Easing for smooth transition
//       scrollTrigger: {
//         trigger: "#drop1",
//         start: 'top 90%',
//         end: 'top 50%',
//         scrub: true,
//       }
//     });
// }, [])

  return (
    <section id="about" data-section className={"about-container"}>
            <h1>How did I know I was destined for coding?</h1>
      <div className={styles["portrait-container"]}>
          <div className={styles["profile-container"]}>
            <Image
              alt="personal logo" 
              src={profilePicFisheye}
              className={styles["portrait"]}
              priority={true}
              id="portrait"
              fill={true}
            />
            <div id="drop1" className={styles["drop"]}></div>
            <div className={styles["drop"]}></div>
            <div className={styles["drop"]}></div>
          </div>
      </div>
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