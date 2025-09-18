'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import NameBody from 'public/images/BodyOfName.png'
import InitialA from 'public/images/Initial-A.png'
import InitialK from 'public/images/Initial-K.png'
import scrollToElement from 'scroll-to-element'
import gsap from 'gsap'
import { useState, useRef, useContext } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { ModalContext } from '@/app/context/provider'

const Navbar = (props) => {
// using context here similar to redux or global state management, had to go 
// client side in order for navbar component to recognize when modal was open
  const { isOpen, isParRoute, parRoute } = useContext(ModalContext)

  useGSAP(() => {
    
    if (isOpen) {
    // Animation for navbar to leave the screen
      gsap.fromTo(
        "#my-nav",
        { yPercent: 0 },
        { yPercent: -120, duration: 1 }
      )
    }
    // Animation for navbar coming back on when closing the modal
      else if (isOpen === false) {
        gsap.fromTo(
          "#my-nav",
          {autoAlpha: 0, yPercent: -120 },
          {autoAlpha: 1, yPercent: 0, duration: 1, delay: 2  }
        )
      };
  }, [isOpen]);

  const [offset, setOffset] = useState(0)
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

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
      
      gsap.from("#my-nav", {
        translateY: [-50, 0],
        delay: 1.5,
        autoAlpha: 0
      }),
  
      gsap.set("#K", {xPercent: 0, autoAlpha: 1}, )
      gsap.set("#letters", {xPercent: 0, autoAlpha: 1}, )

      gsap.to("#K", {
        xPercent: -34,
        immediateRender: false,
        scrollTrigger: {
          trigger: "#K",
          start: 125,
          end: 250,
          scrub: 1,
        }
      });

      gsap.to("#letters", {
        autoAlpha: 0,
        immediateRender: false,
        scrollTrigger: {
          trigger: "#letters",
          start: 50,
          end: 200,
          scrub: 1,
        }
      });

      gsap.fromTo("#K", {
        xPercent: -34,
      }, {
        xPercent: 0,
        immediateRender: false,
        scrollTrigger: {
          trigger: '#contact',
          start: "top center",
          end: "top top",
          toggleActions: "play none none reverse",
        }
      })

      gsap.fromTo("#letters", {
        autoAlpha: 0,
      }, {
        autoAlpha: 1,
        immediateRender: false,
        scrollTrigger: {
          trigger: '#contact',
          start: "top center",
          end: "top top",
          toggleActions: "play none none reverse",
        }
      })

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
    transition: '1s'
  };

  let logoSize = (props.windowWidth > 500) ? 200 : 150
  

  let opacity = offset * .0035 //increases glassomorphism behind nav as you scroll up
  
  const smoothLinkClick = (e, target) => {
    
    if (typeof window !== "undefined") {
        if (e) e.preventDefault()
        scrollToElement(target, {
          offset: -60, // Offsets fixed header
          ease: 'in-expo',
          duration: 1000,
        })
    }
  }
  
  return (
    <div id='my-nav' 
    >
      { !isParRoute ?
      <nav>
        <Link 
          onClick={e => {smoothLinkClick(e, '#home')}} 
          href={"/#home"}
          className={styles["logo-container"]}
        >
          <Image
            alt="personal logo" 
            id="A"
            src={InitialA}
            width={logoSize}
            className={styles["nav-logo-A"]}
          />
          <Image
            alt="personal logo" 
            id="letters"
            src={NameBody}
            width={logoSize}
            className={styles["nav-logo-letters"]}
          />
          <Image
            alt="personal logo" 
            src={InitialK}
            id="K"
            width={logoSize}
            className={styles["nav-logo-K"]}
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
      </nav> :
      <nav>
        <Link 
          onClick={() => parRoute()}
          href="/"
          className={styles["logo-container-right"]}
        >
          <Image
            alt="personal logo" 
            id="A"
            src={InitialA}
            width={logoSize}
            className={styles["nav-logo-A"]}
          />
          <Image
            alt="personal logo" 
            id="letters"
            src={NameBody}
            width={logoSize}
            className={styles["nav-logo-letters"]}
          />
          <Image
            alt="personal logo" 
            src={InitialK}
            id="K"
            width={logoSize}
            className={styles["nav-logo-K"]}
          />
        </Link>
      </nav>
}
      <div className={styles.glassomorph} style={{opacity: (opacity > 1) ? 1 : opacity}}></div>
    </div>

  )
}

export default Navbar