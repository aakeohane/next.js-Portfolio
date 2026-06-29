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
      scrollTrigger: {
        trigger: '#title',
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from("#descriptionOne", {
      opacity: 0,
      translateY: [20],
      translateX: [40],
      scrollTrigger: {
        trigger: '#descriptionOne',
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from("#descriptionTwo", {
      opacity: 0,
      translateY: [20],
      translateX: [-40],
      scrollTrigger: {
        trigger: '#descriptionTwo',
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from("#descriptionThree", {
      opacity: 0,
      translateY: [20],
      translateX: [40],
      scrollTrigger: {
        trigger: '#descriptionThree',
        start: "top 100%",
        toggleActions: "play none none reverse",
      }
    })

    gsap.from("#resumeBtn", {
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: '#resumeBtn',
        start: "top 100%",
        toggleActions: "play none none reverse",
      }
    })

}, [])

  return (
    <section id="about" data-section>
      <div className={styles["about-container"]}>
        <div className={styles["portrait-container"]}>
          <Image
            alt="colored in profile pic" 
            src={portraitColor}
            className={styles["portrait-color"]}
            priority
            id="portraitColor"
          />
          <Image
            alt="black and white profile pic" 
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
          <div className={styles["description-container"]}>
            <p id="descriptionOne" className={styles["filter"]}>
              I’ve always been the person who immediately Googles the answer the moment there is any uncertainty. I found that I love creating digital experiences just as much as I love understanding how they work.
            I’m passionate about thoughtful web design, expressive typography, and the small design details that shape an online experience.
            </p>
            <p id="descriptionTwo" className={styles["filter"]}>
              Sustainability and environmental advocacy are important to me, and I aim to reflect those values in the work I create. Whether I’m experimenting with watercolor, refining a layout, or working toward a zero-waste lifestyle, I’m always inspired by the natural world—especially the ocean.
              When I’m not obsessing over responsive breakpoints, you can find me on the tennis courts.
            </p>
            <p id="descriptionThree" className={styles["filter"]}>
              Curious to learn more? Take a peek at my resume below.
            </p>
            <Link                       
              href="files/Keohane_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="resumeBtn" 
              className={styles["resume-button"]}
            >
            <span>Resume</span>
            </Link>
          </div>
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
        </div>
      </div>
    </section>
  )
}

export default About