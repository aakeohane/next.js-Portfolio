import styles from './hero.module.css'
import Image from 'next/image';
import gsap from 'gsap'
import profilePic from 'public/images/professional-portrait-v3.png'
import { bebasNeueFontClass, blastimoFontClass, blowbrushFontClass } from '@/pages/_app.js';
import { useEffect, useLayoutEffect, useRef } from 'react';


const Hero = () => {

  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set("#developer", {
        x: -300
      }),
      gsap.to("#developer", {
        x: 0,
        duration: 2,
        delay: 1
      })
      return () => ctx.revert()
    })
  }, [])


  
  
  return (
    <section id="hero" data-section>
      <div className={styles["main-content"]}>
      <div className={styles["inner-content"]}>
        <div  style={{lineHeight: 0.9}}>
          <span id="developer" className={`${bebasNeueFontClass} ${styles.developer}`}>Web developer<span className={styles.period}>.</span></span><br></br>
          <span className={`${blowbrushFontClass} ${styles.biologist}`}>BiolOgist<span className={styles.period}>.</span></span><br></br>
          <span className={`${blastimoFontClass} ${styles.artist}`}>ArTist<span className={styles.artista}>.</span></span>
        </div>

        <div className={styles["portrait-container"]}>
          <Image
            alt="personal logo" 
            src={profilePic}
            className={styles.portrait}
            height={350}
            priority={true}
          />
        </div>
        
        <div className={styles["bio-container"]}>
          <h2 className={`${blowbrushFontClass}`}>That's me, Aaron</h2>
          <p className={`${bebasNeueFontClass} ${styles.bio}`}>
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