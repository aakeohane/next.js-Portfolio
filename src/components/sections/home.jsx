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

      gsap.set("#squid", {xPercent: 0, yPercent:0, autoAlpha: 1}, )

      gsap.to("#squid", {
        xPercent: 34,
        yPercent: 50,
        immediateRender: false,
        scrollTrigger: {
          // trigger: "#K",
          start: 125,
          end: 250,
          scrub: 1,
        }
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
            <Image src="/images/Nautilus-tentacles.gif" fill={true} className={styles["nautilus"]} unoptimized={true} />
            
              {/* <Image
                alt="personal logo" 
                src={nautilus}
                className={styles["nautilus"]}
                priority={true}
                id="nautilus"
                fill={true}
              /> */}  
          </div>
        </div>
      
        <div className={styles["flex-container-right"]}>
          <div className={styles["inkbleed-container"]}>
            <Image src={inkbleed} fill={true} className={styles["hero-main-text"]} unoptimized={true} />
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