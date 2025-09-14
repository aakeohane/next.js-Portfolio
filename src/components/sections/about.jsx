import styles from './about.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Image from 'next/image';
import portraitColor from 'public/images/professional-portrait-watercolor-v3.png'
import profilePic from 'public/images/professional-portrait-watercolor-bw.png'

import Link from 'next/link';

const About = () => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    gsap.to("#portraitColor", {
      maskPosition: "100% 0%",
      ease: 'steps(24)',
      scrollTrigger: {
        trigger: '#portraitColor',
        start: "top 25%",
        end: "top 0%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from("#drops", {
      opacity: 0,
      scrollTrigger: {
        trigger: '#portraitColor',
        start: "top 25%",
        end: "top 0%",
        toggleActions: "play none none none",
      }
    })

    gsap.from("#title", {
      opacity: 0,
      translateY: [20],
      translateX: [-20],
      scrollTrigger: {
        trigger: '#title',
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from("#description", {
      opacity: 0,
      translateY: [20],
      translateX: [20],
      scrollTrigger: {
        trigger: '#description',
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from("#resumeBtn", {
      opacity: 0,
      scrollTrigger: {
        trigger: '#description',
        start: "bottom 90%",
        toggleActions: "play none none reverse",
      }
    })

}, [])

  return (
    <section id="about" data-section>
      <div className={styles["about-container"]}>
        <div className={styles["portrait-container"]}>
          <Image
            alt="personal logo" 
            src={portraitColor}
            className={styles["portrait-color"]}
            priority
            id="portraitColor"
          />
          <Image
            alt="personal logo" 
            src={profilePic}
            className={styles["portrait-bw"]}
            priority
            id="portrait"
          />
          <div id="drops" className={styles["drops"]}>
            <div className={styles["drop"]}></div>
            <div className={styles["drop"]}></div>
            <div className={styles["drop"]}></div>
            <div className={styles["drop"]}></div>
          </div>
          
        </div>
        <div className={styles["content-container"]}>
          <h1 id="title" className={styles["title"]}>How did I know I was destined for coding?</h1>
          <p id="description" className={styles["filter"]}>
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

{/* lofi inkbleed text effect for paragaph */}
<svg height="0" width="0" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="pFilter">
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 0 0 0 1 1 1 1 1 1" />
      </feComponentTransfer>
    </filter>
    <filter id="scribbleBorder">
      <feTurbulence type="fractalNoise" baseFrequency=".1" numOctaves="2" />
      <feDisplacementMap in="SourceGraphic" scale="4" />
    </filter>
    <filter id="displacementFilter">
      <feTurbulence  id="turbulence" type="turbulence"
        baseFrequency="0 0"
        numOctaves="100"
        result="noise"  />
      <feDisplacementMap id="displacement" in="SourceGraphic"
        in2="noise"
        scale="8"
        xChannelSelector="R"
        yChannelSelector="G"/>
    </filter>  
  </defs>
</svg>

          <button id="resumeBtn" className={styles["resume-button"]}>
            <Link                        
              href="files/keohane-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >Resume
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default About