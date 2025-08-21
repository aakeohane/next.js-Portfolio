import styles from './home.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import scrollToElement from 'scroll-to-element'
import Link from 'next/link';
import Image from "next/image";
import nautilus from "public/images/nautilus-v1.png"


const Home = () => {

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
  
  useGSAP(() => {
      gsap.from("#developer", {
        opacity: 0,
      }),
      gsap.from("#biologist", {
        translateY: [50, 0],
        rotation:20,
        opacity: 0,
        delay: 1,
      }),
      gsap.from("#artist", {
        translateY: [50, 0],
        rotation: 30,
        opacity: 0,
        delay: 1,
      }),
      gsap.from("#biography", {
        translateY: [20, 0],
        opacity: 0,
        delay: 2.5
      })
      gsap.from("#work-bttn", {
        opacity: 0,
        duration: 2,
        delay: 2
      })

  }, [])
  
  return (
    <section id="home" data-section style={{}}>
      <div  className={styles["main-content"]}>
        <div className={styles["nautilus-container"]}>
          <Image
            alt="personal logo" 
            src={nautilus}
            className={styles["nautilus"]}
            priority={true}
            id="nautilus"
            fill={true}
          />
        </div>
      
        <div className={styles["bio-container"]}>
          <h1 id="biography" className={`${styles.bio}`}>
            I am a web developer based in sunny San Diego. Passionate about always finding a solution, with a strong multi-disciplinary background, 
            you can be sure I will think imaginatively when finding yours. I love the ocean, watercolor, and typography. 
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