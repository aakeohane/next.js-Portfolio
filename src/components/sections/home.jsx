import styles from './home.module.css'
import gsap from 'gsap'
import { bebasNeueFontClass, blastimoFontClass, blowbrushFontClass } from '@/app/layout';
import { useGSAP } from '@gsap/react';
import scrollToElement from 'scroll-to-element'
import Link from 'next/link';


const Home = () => {

  const smoothLinkClick = (e, target) => {
    console.log(target)
    if (typeof window !== "undefined") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -60, // Offsets fixed header
          ease: 'in-expo',
          duration: 1000,
        })
    }
  }
  
  useGSAP(() => {
      gsap.from("#developer", {
        translateY: [50, 0],
        rotation:10,
        opacity: 0,
        delay: 1,
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
      gsap.from("#portrait", {
        opacity: 0,
        duration: 3,
        delay: 2
      }),
      gsap.from("#intro", {
        translateX: [-100, 0],
        opacity: 0,
        duration: 1,
        delay: 2.5
      }),
      gsap.from("#hero-bttn", {
        opacity: 0,
        duration: 3,
        delay: 3
      })
      gsap.from("#biography", {
        opacity: 0,
        duration: 3,
        delay: 2.5
      })
      gsap.from("#work-bttn", {
        opacity: 0,
        duration: 3,
        delay: 2.5
      })
  }, [])


  
  
  return (
    <section id="home" data-section>
      <div className={styles["main-content"]}>
          <div className={styles["title-container"]}>
            <div className={styles.hidden}><span id="artist" className={`${blastimoFontClass} ${styles.artist}`}>ArTist<span className={styles.artista}>.</span></span></div>
            <div className={styles.hidden}><span id="biologist" className={`${blowbrushFontClass} ${styles.biologist}`}>BiolOgist<span className={styles.period}>.</span></span></div><br></br>
            <div className={styles.hidden}><span id="developer" className={`${bebasNeueFontClass} ${styles.developer}`}>Web developer<span className={styles.period}>.</span></span></div><br></br>
          </div>
          
          <div className={styles["bio-container"]}>
            <div className={`${styles.hidden} ${styles["hidden-override"]}`}><h2 id="intro" className={`${blowbrushFontClass} ${styles["intro"]}`}>That's me, Aaron</h2></div>
            <p id="biography" className={`${bebasNeueFontClass} ${styles.bio}`}>
              A web developer based in sunny San Diego. Passionate about always finding a solution, with a strong multi-disciplinary background, 
              you can be sure I will think imaginatively when finding yours. 
            </p>
            <Link
              onClick={(e) => smoothLinkClick(e, '#work')}
              id="work-bttn"
              className={`${styles['workbttn']} ${blowbrushFontClass}`}
              href="/#work"
            >Work</Link>
          </div> 
        </div> 
    </section>
  )
}

export default Home