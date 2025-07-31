'use client'

import About from '@/components/sections/about'
import Work from '@/components/sections/work'
import Contact from '@/components/sections/contact'
import { useEffect, useState } from 'react'
import Footer from '@/components/footer'
import Home from '@/components/sections/home'
import Header from '@/components/header'

import watercolorWhale from 'public/images/jelly.png'
import Image from 'next/image';

import styles from './portfolio.module.css'

const Portfolio = ({allWerkData}) => {
  

  const size = useWindowSize();
  const [isLoading, setIsLoading] = useState(true)

  function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false)
    }
    
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      
    }
    
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Removes event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

  return (
    <>
    {isLoading ? 
      <div id="globalLoader">
        <div id="loader"></div>
      </div>
      :
      <main>
        <Header windowWidth={size.width} />
        <div id="fake-body" style={{ overflow: "hidden", position: "relative", width: "100vw", display: 'flex', flexDirection: 'column'}}>
          <Home/>
          <div className={styles["whale-container"]}>
          <Image
            alt="watercolor whale" 
            src={watercolorWhale}
            className={styles["whale"]}
            priority={true}
            id="whale"
          />
        </div>
          <About/>
          <Work allWerkData={allWerkData} windowWidth={size.width}/>
          <Contact/>
        </div>
        <Footer />
      </main>}
    </>
  )
}

export default Portfolio