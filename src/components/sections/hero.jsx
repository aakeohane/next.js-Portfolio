import styles from './hero.module.css'
import Img from 'next/image';
import whale from 'public/images/whale-watercolor.png'
// import paper from 'public/images/torn-edges-4-watercolor.png'
import { bebasNeueFontClass, blastimoFontClass } from '@/pages/_app.js';

const Landing = () => {
  
  return (
    <section id="hero" data-section>
      <div className={styles["main-content"]}>

        <div style={{lineHeight: 0.9, marginTop: "10vh"}}>
          <span className={`${bebasNeueFontClass} ${styles.developer}`}>Web developer<span className={styles.period}>.</span></span><br></br>
          <span className={styles.biologist}>BiolOgist<span className={styles.period}>.</span></span><br></br>
          <span className={`${blastimoFontClass} ${styles.artist}`}>ArTist<span className={styles.artista}>.</span></span>
        </div>

        <div className={styles["whale-container"]}>
          <Img
            alt="personal logo" 
            src={whale}
            className={styles.whale}
            priority={true}
          />
        </div>

        <p className={`${bebasNeueFontClass} ${styles.bio}`}>
          I'm a web developer based in sunny San Diego. Passionate about always finding a solution, with a strong multi-disciplinary background, 
          you can be sure I will think imaginatively when finding yours.
        </p>
      </div>
    </section>
  )
}

export default Landing