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
      translateX: [-40],
      delay: 1.5,
      scrollTrigger: {
        trigger: '#title',
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from("#description", {
      opacity: 0,
      translateY: [20],
      translateX: [40],
      delay: 1.5,
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
            I’ve always been the person who immediately Googles the answer the moment there is any uncertainty. With an academic background in the sciences, I learned to approach problems with a blend of critical thinking, creativity, and perseverance. That mindset translated naturally into web development, where I found that I love creating digital experiences just as much as I love understanding how they work.
            My journey from marketing into tech opened the door to something I genuinely enjoy: combining logic and artistry. I’m passionate about thoughtful web design, expressive typography, and the small design details that quietly shape how people feel online.
          </p>
          <p id="description" className={styles["filter"]}>
            Sustainability and environmental advocacy are important to me, and I aim to reflect those values in the work I create. Whether I’m experimenting with watercolor, refining a layout, or working toward a zero-waste lifestyle, I’m always inspired by the natural world—especially the ocean.
            When I’m not obsessing over responsive breakpoints or experimenting with new design ideas, you can usually find me on the tennis courts recharging and enjoying some friendly competition.
            Curious to learn more? Take a peek at my CV below.
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
              href="files/Keohane_Resume_2026.pdf"
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