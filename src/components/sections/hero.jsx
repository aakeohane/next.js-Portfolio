import styles from './hero.module.css'
import Image from 'next/image';
import gsap from 'gsap'
import profilePic from 'public/images/professional-portrait-v3.png'
import { bebasNeueFontClass, blastimoFontClass, blowbrushFontClass } from '@/pages/_app.js';
import { useEffect } from 'react';


const Hero = () => {
  
  useEffect(() => {
    
    let ctx = gsap.context(() => {
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
      gsap.from("#biography", {
        opacity: 0,
        duration: 3,
        delay: 3.5
      })

      return () => ctx.revert()
    })
  }, [])


  
  
  return (
    <section id="hero" data-section>
      <div className={styles["main-content"]}>
      <div className={styles["inner-content"]}>
        <div>
          <div className={styles.hidden}><span id="developer" className={`${bebasNeueFontClass} ${styles.developer}`}>Web developer<span className={styles.period}>.</span></span></div><br></br>
          <div className={styles.hidden}><span id="biologist" className={`${blowbrushFontClass} ${styles.biologist}`}>BiolOgist<span className={styles.period}>.</span></span></div><br></br>
          <div className={styles.hidden}><span id="artist" className={`${blastimoFontClass} ${styles.artist}`}>ArTist<span className={styles.artista}>.</span></span></div>
        </div>

        <div className={styles["portrait-container"]}>
          <Image
            alt="personal logo" 
            src={profilePic}
            className={styles.portrait}
            height={350}
            priority={true}
            id="portrait"
          />
        </div>
        
        <div className={styles["bio-container"]}>
          <div className={`${styles.hidden} ${styles["hidden-override"]}`}><h2 id="intro" className={`${blowbrushFontClass}`}>That's me, Aaron</h2></div>
          <p id="biography" className={`${bebasNeueFontClass} ${styles.bio}`}>
            A web developer based in sunny San Diego. Passionate about always finding a solution, with a strong multi-disciplinary background, 
            you can be sure I will think imaginatively when finding yours.
          </p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero