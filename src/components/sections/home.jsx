import styles from './home.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import scrollToElement from 'scroll-to-element'
import Link from 'next/link';
import Image from "next/image";
import nautilus from "public/images/nautilus-v1.png"
import name from "public/images/FullName.png"


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
      
      gsap.from("#work-bttn", {
        opacity: 0,
        duration: 2,
        delay: 2
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
            <Image
              alt="personal logo" 
              src={nautilus}
              className={styles["nautilus"]}
              priority={true}
              id="nautilus"
              fill={true}
            />
          </div>
        </div>
      
        <div className={styles["bio-container"]}>
          <div className={styles["logo-container"]}>
            <Image
              alt="personal logo" 
              src={name}
              className={styles["logo-name"]}
              priority={true}
              id="logoName"
            />
        </div>
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