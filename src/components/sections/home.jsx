import styles from './home.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import scrollToElement from 'scroll-to-element'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';
import Image from "next/image";
import name from "public/images/FullName.png"
import MovingNautilus from '../moving-nautilus';
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
        <div className={styles["flex-container-left"]}>
          <div className={styles["nautilus-container"]}>
            <Image id="nautilus" src="/images/Nautilus-tentacles.gif" fill={true} className={styles["nautilus"]} unoptimized={true} />  
          </div>
        </div>
      
        <div className={styles["flex-container-right"]}>
          <div className={styles["inkbleed-container"]}>
            <Image id="titles" src={inkbleed} fill={true} className={styles["hero-main-text"]} unoptimized={true} />
          </div>

          <h1 id="biography" className={`${styles.bio}`}>
            I’m Aaron, a curious, design-loving web developer with a background in science and marketing. 
            I enjoy building thoughtful digital experiences utilizing typography and clean, intuitive design. 
            My work is inspired by my love for the ocean, sustainability, and the world around us. 
          </h1>
          <button id="work-bttn" className={styles['work-button']} >
            <Link
              onClick={(e) => smoothLinkClick(e, '#work')}
              href="/#work"
            >My Projects
            </Link>
          </button>
        </div>
        
      </div>
          
    </section>
  )
}

export default Home