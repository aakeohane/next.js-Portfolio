import styles from './home.module.css'
import gsap from 'gsap'
import { bebasNeueFontClass, blastimoFontClass, blowbrushFontClass } from '@/app/layout';
import { useGSAP } from '@gsap/react';
import watercolorWhale from 'public/images/jelly.png'
import scrollToElement from 'scroll-to-element'
import Link from 'next/link';
import Image from 'next/image';
import inkedWorkBttn from 'public/images/Work_button-inked.png'


const Home = () => {

  const smoothLinkClick = (e, target) => {
    if (typeof window !== "undefined") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -280, // Offsets fixed header
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
    <section id="home" data-section>
      <div  className={styles["main-content"]}>
        <div className={styles["title-container"]}>
          <div className={styles.hidden}><span id="artist" className={`${blastimoFontClass} ${styles.artist}`}>ArTist<span className={styles.artista}>.</span></span></div>
          <div className={styles.hidden}><span id="biologist" className={`${blowbrushFontClass} ${styles.biologist}`}>BiolOgist<span className={styles.period}>.</span></span></div><br></br>
          <div className={styles["hidden-two"]}><span id="developer" className={`${bebasNeueFontClass} ${styles.developer}`}>Web Developer<span className={styles.period}>.</span></span></div><br></br>
        </div>
        
        <div className={styles["whale-container"]}>
          <Image
            alt="watercolor whale" 
            src={watercolorWhale}
            className={styles["whale"]}
            priority={true}
            id="whale"
          />
        </div>
        <div className={styles["bio-container"]}>
          <p id="biography" className={`${bebasNeueFontClass} ${styles.bio}`}>
            A web developer based in sunny San Diego. Passionate about always finding a solution, with a strong multi-disciplinary background, 
            you can be sure I will think imaginatively when finding yours. 
          </p>
          {/* <Link
            onClick={(e) => smoothLinkClick(e, '#work')}
            id="work-bttn"
            className={`${styles['workbttn']} ${blowbrushFontClass}`}
            href="/#work"
          >Work</Link> */}
          <Link
            onClick={(e) => smoothLinkClick(e, '#work')}
            id="work-bttn"
            className={styles['workBttn']}
            href="/#work"
          ><Image
          alt="watercolor work button" 
          src={inkedWorkBttn}
          id="workbttn"
          width={100}
          />
          </Link>
        </div>
      </div>
          
    </section>
  )
}

export default Home