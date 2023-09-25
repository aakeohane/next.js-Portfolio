import styles from './landing.module.css'
import Img from 'next/image';
import whale from 'public/images/whale-watercolor.png'
// import paper from 'public/images/torn-edges-4-watercolor.png'
import { bebasNeueFontClass, blastimoFontClass, interFontClass } from '@/app/layout';

const Landing = () => {
  
  return (
    <section id="landing">
      <div className={styles["main-content"]}>

        <div style={{lineHeight: 0.9, marginTop: "10vh"}}>
          <span className={`${bebasNeueFontClass} ${styles.developer}`}>Web developer.</span><br></br>
          <span className={styles.biologist}>BiolOgist.</span><br></br>
          <span className={`${blastimoFontClass} ${styles.artist}`}>ArTist</span><span className={`${blastimoFontClass} ${styles.artist}`} style={{lineHeight: 0}}>.</span>
        </div>

        <div className={styles["whale-container"]}>
          <Img
            alt="personal logo" 
            src={whale}
            className={styles.whale}
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