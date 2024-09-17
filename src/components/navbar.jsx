import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import logo from 'public/images/initial.png'
import aaron from 'public/images/only-aaron.png'
import keohane from 'public/images/only-keohane.png'
import scrollToElement from 'scroll-to-element'
import { blastimoFontClass } from '@/app/layout'

import gsap from 'gsap'
import { useState, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Navbar = () => {

  const [offset, setOffset] = useState(0)
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  
  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop - 300;
      const sectionHeight = section.offsetHeight;


      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });
    setActiveSection(newActiveSection);
  };


  useGSAP(() => {

      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#navBar", {
        translateY: [-50, 0],
        delay: 1.5,
        opacity: 0
      }),
  
      gsap.set("#aaron", {xPercent: 0, opacity: 1})
      gsap.set("#keohane", {xPercent: 0, opacity: 1}, )
  
      gsap.to("#aaron", {
        xPercent: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#aaron",
          start: 20,
          end: 250,
          scrub: true,
          
        }
      });

      gsap.to("#keohane", {
        xPercent: -150,
        opacity: 0,
        scrollTrigger: {
          trigger: "#keohane",
          start: 20,
          end: 250,
          scrub: true,
        }
      });

    // must do this for proper webpack build if not 'client' component
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        setOffset(window.scrollY)
      }
      sections.current = document.querySelectorAll('[data-section');
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [])

  const activeStyle = {
    color: 'var(--whale-yellow)',
    transition: '2s'
  };
  
  const logoSize = 65

  let opacity = offset * .0035 //increases glassomorphism behind nav as you scroll up
  
  const smoothLinkClick = (e, target) => {
    if (typeof window !== "undefined") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: target == '#home' ? -90 : -60, // Offsets fixed header
          ease: 'in-expo',
          duration: 1000,
        })
    }
  }
  
  return (
    <div className={blastimoFontClass}>
      <nav id="navBar">
        <Link 
          onClick={e => smoothLinkClick(e, '#home')} 
          href={"/#home"}
          className={styles["logo-container"]}
        >
          <Image
            alt="personal logo" 
            id="aaron"
            src={aaron}
            width={logoSize}
            className={styles["nav-logo-aaron"]}
          />
          <Image
            alt="personal logo" 
            src={logo}
            width={logoSize}
            className={styles["nav-logo-square"]}
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
          className={`${styles["nav-link"]} ${activeSection === 'about' ? 'active' : ''}`}
          style={activeSection === 'about' ? activeStyle : {}}
        >
          about,
        </Link>
        <Link 
          onClick={e => smoothLinkClick(e, '#work')} 
          href={"/#work"}
          className={`${styles["nav-link"]} ${activeSection === 'work' ? 'active' : ''}`}
          style={activeSection === 'work' ? activeStyle : {}}
        >
          work,
        </Link>
        <Link 
          onClick={e => smoothLinkClick(e, '#contact')} 
          href={"/#contact"}
          className={`${styles["nav-link"]} ${activeSection === 'contact' ? 'active' : ''}`}
          style={activeSection === 'contact' ? activeStyle : {}}
        >
          contact
        </Link>
      </nav>
      <div className={styles.glassomorph} style={{opacity: (opacity > 1) ? 1 : opacity}}></div>
    </div>

  )
}

export default Navbar