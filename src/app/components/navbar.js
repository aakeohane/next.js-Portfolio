import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import logo from 'public/images/initials.png'
import aaron from 'public/images/only-aaron.png'
import keohane from 'public/images/only-keohane.png'
import scrollToElement from 'scroll-to-element'
import { blastimoFontClass } from '../layout'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'



const Navbar = ({offset}) => {

  const aaronRef = useRef(null)

  useEffect(() => {

    
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin()

    const el = aaronRef.current


    gsap.set("#keohane", {xPercent: 0, opacity: 1})
    gsap.set(el, {xPercent: 0, opacity: 1})


    gsap.to("#keohane", {
      xPercent: -150,
      opacity: 0,
      scrollTrigger: {
        trigger: "#keohane",
        start: offset = 80,
        scrub: true,
      }
    });

    gsap.to(el, {
      xPercent: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: el,
        start: offset = 80,
        scrub: true,
      }
    });
  }, [])
  

  
  const logoSize = 65

  let opacity = offset * .005 //increases glassomorphism behind nav as you scroll up
  
  const smoothLinkClick = (e, target) => {
    if (typeof window !== "undefined") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -90, // Offsets fixed header
          ease: 'in-expo',
          duration: 1000,
        })
    }
  }
  
  return (
    <div className={blastimoFontClass}>
      <nav>
        <Link 
          onClick={e => smoothLinkClick(e, '#landing')} 
          href={"/#landing"}
          className={styles["logo-container"]}
        >
          <Image
            alt="personal logo" 
            id="aaron"
            src={aaron}
            width={logoSize}
            className={styles["nav-logo-aaron"]}
            ref={aaronRef}
          />
          <Image
            alt="personal logo" 
            src={logo}
            width={logoSize}
            className={styles["nav-logo"]}
          />
          <Image
            alt="personal logo" 
            src={keohane}
            id="keohane"
            width={logoSize}
            className={styles["nav-logo-keohane"]}
            
          />
        </Link>
        <Link 
          onClick={e => smoothLinkClick(e, '#about')} 
          href={"/#about"}
          className={styles["nav-link"]}
        >
          about,
        </Link>
        <Link 
          onClick={e => smoothLinkClick(e, '#work')} 
          href={"/#work"}
          className={styles["nav-link"]}
        >
          work,
        </Link>
        <Link 
          onClick={e => smoothLinkClick(e, '#contact')} 
          href={"/#contact"}
          className={styles["nav-link"]}
        >
          contact
        </Link>
      </nav>
      <div className={styles.glassomorph} style={{opacity: (opacity > 1) ? 1 : opacity}}></div>
    </div>

  )
}

export default Navbar