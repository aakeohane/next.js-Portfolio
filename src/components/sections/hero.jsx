import styles from './hero.module.css'
import Image from 'next/image';
import profilePic from 'public/images/professional-portrait-v3.png'
import { bebasNeueFontClass, blastimoFontClass, blowbrushFontClass } from '@/pages/_app.js';

const Hero = () => {
  
  return (
    <section id="hero" data-section>
      <div className={styles["main-content"]}>

        <div style={{lineHeight: 0.9, marginTop: "15vh"}}>
          <span className={`${bebasNeueFontClass} ${styles.developer}`}>Web developer<span className={styles.period}>.</span></span><br></br>
          <span className={`${blowbrushFontClass} ${styles.biologist}`}>BiolOgist<span className={styles.period}>.</span></span><br></br>
          <span className={`${blastimoFontClass} ${styles.artist}`}>ArTist<span className={styles.artista}>.</span></span>
        </div>

        <div>
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
    </section>
  )
}

export default Hero