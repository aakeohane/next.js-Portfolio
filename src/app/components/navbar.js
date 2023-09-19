import Link from 'next/link'
import Image from 'next/image'
import styles from './navbar.module.css'
import logo from 'public/images/logo.png'
import scrollToElement from 'scroll-to-element'
import { blastimoFontClass } from '../layout'

const Navbar = ({offset}) => {
  
  let opacity = offset * .008 //increases glassomorphism behind nav as you scroll up
  
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
          style={{marginRight: "auto", display: "flex", alignItems: "center"}}
          onClick={e => smoothLinkClick(e, '#landing')} 
          href={"/#landing"}
        >
            <Image
              alt="personal logo" 
              src={logo}
              width={55}
              className={styles["nav-logo"]}
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









