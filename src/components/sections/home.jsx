import styles from './home.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import scrollToElement from 'scroll-to-element'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';
import Image from "next/image";
import Aaron from "public/images/Aaron.png"
import Keohane from "public/images/Keohane.png"
// import MovingNautilus from '../moving-nautilus';
gsap.registerPlugin(ScrollTrigger);

const Home = (props) => {

  const smoothLinkClick = (e, target) => {
    if (typeof window !== "undefined") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -75, // Offsets fixed header
          ease: 'in-expo',
          duration: 1000,
        })
    }
  }

  let inkbleed = (props.windowWidth > 5000) ? "/images/inkbleed-desktop.gif"  : "/images/inkbleed-main.gif"
  
  useGSAP(() => {
      
      gsap.from("#Aaron", {
          opacity: 0,
          duration: 5,
          delay: 1
      })

      gsap.from("#Keohane", {
          opacity: 0,
          duration: 5,
          delay: 1
      })

      gsap.from("#work-bttn", {
        opacity: 0,
        duration: 2,
        delay: 2
      })

      gsap.from("#biography", {
        translateY: [20, 0],
        opacity: 0,
        delay: 2.5
      })

      gsap.from("#nautilus", {
        translateX: [-200],
        duration: 2,
        opacity: 0,
        delay: 3.5
      })

      gsap.from("#titles", {
        opacity: 0,
        duration: 4,
        delay: 3.5
      })


      let tl = gsap.timeline({repeat: -1, repeatDelay: 5})
      
      const feTurbulence = document.querySelector("#displacementFilter feTurbulence")
      
      tl.to(feTurbulence, {
        attr: {
          baseFrequency: "0.01 0.01",
        },
        duration: 5,
        ease: "sine.in",
      })
      .to(feTurbulence, {
        attr: {
          baseFrequency: "0 0",
        },
        duration: 5,
        ease:"sine.out",
      })

  }, [])
  
  return (
    <section id="home" data-section style={{}}>
      <div  className={styles["main-content"]}>
        <div className={`${styles.column}`}>
          <div className={styles["name-container"]}>
            <Image
              alt="watercolor stylized name - Aaron" 
              src={Aaron}
              className={styles["name-watercolor"]}
              priority
              height={150}
              id="Aaron"
            />
            <Image
              alt="watercolor stylized name - Keohane" 
              src={Keohane}
              className={styles["name-watercolor"]}
              priority
              height={150}
              id="Keohane"
            />
          </div>
          <div className={`${styles.bioContainer}`}>

            <p id="biography" className={`${styles.bio}`}>
              I’m Aaron, a curious, design-loving web developer with a background in science and marketing. 
              Inspired by my love for the ocean, sustainability, and the world around us. 
            </p>
            <button id="work-bttn" className={styles['work-button']} onClick={(e) => smoothLinkClick(e, '#work')} href="/#work" >
              Work
            </button>
          </div>
        </div>
        <div className={`${styles.column}`}>
          {/* blank column */}
        </div>
      </div>
          
    </section>
  )
}

export default Home