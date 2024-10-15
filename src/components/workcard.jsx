'use client'
import Link from "next/link";
import Image from "next/image"
import styles from "./workcard.module.css"
import { forwardRef, useState, useEffect } from "react"
import { usePreventScroll } from "@react-aria/overlays";
import { isMobile, isSafari } from "react-device-detect";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Workcard = forwardRef(({order, title, image, slug, windowWidth}, ref) => {

  const [hover, setHover] = useState(false)
  const [bodyLocked, setBodyLocked] = useState(false)
  const [isSafariMobile, setSafariMobile] = useState(false)


  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  useEffect(() => {
    const SafariMobile = isMobile && isSafari;
    if (SafariMobile) {
      console.log("safari and mobile")
      setSafariMobile(true)
    }
  }, [bodyLocked])


  if (isSafariMobile === true) {
    console.log(isSafariMobile)
    usePreventScroll()
    console.log("prevent scroll on safari mobile worked")
  }


  const handleClick = () => {
    setBodyLocked(true)
  }

  useEffect(() => {
    if (bodyLocked) {
      const body = document.getElementById('bodyEl')
      body.style.overflow = 'hidden'
      console.log("body is locked on any browser other than safari mobile")
      setBodyLocked(false)
    } else return
  }, [bodyLocked])

  const hoverTitle = {
    opacity: (windowWidth > 700) ? (hover ? '1' : '0') : null
  }

  const hoverImage = {
    transition: 'transform 1.25s ease-out, filter 1.25s ease-in-out',
    transform: hover ? 'scale(1.4)' : null,
    filter: (windowWidth > 700) ? hover ? 'grayscale(0%)' : 'grayscale(100%)' : null
  }

  const hoverContainer = {
    transition: 'transform 1.25s ease-out',
    transform: hover ? 'scale(.95)' : null,
  }

  return (
      <Link 
        key={order}
        className={styles["link-container"]}
        href={`projects/${slug}`}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
        scroll={false}
        shallow={true}>
        <div ref={ref} className={styles["workcard-content-container"]} style={hoverContainer} >
          <Image
            className={styles["workcard-image"]}
            alt="project image" 
            style={hoverImage}
            src={image}
            sizes="100vw"
            width={300}
            height={100}
            onLoad={() => ScrollTrigger.refresh()} // Refresh ScrollTrigger after image loads
            priority
          />
          <div className={styles["workcard-div"]}>
            <h3 
            className={styles["workcard-title"]}
            style={hoverTitle}
            >
            {title}
            </h3>
          </div>
        </div>
      </Link>
  );
})

export default Workcard;
