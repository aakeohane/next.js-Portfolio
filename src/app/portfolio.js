'use client'

import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Work from '@/components/sections/work'
import Contact from '@/components/sections/contact'
import { useEffect, useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Portfolio = ({allWerkData}) => {

  const size = useWindowSize();

  // Hook
  function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
     
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


// runs this when loading, dynamically measure viewport height taking into account browsers built-in bottom and top bars
// this is not dynamically responsive, but will work on refresh and also need to put in media query for screens greater than
// 1650 pixels wide (change containers size to prevent wrap)
  // useEffect(() => {
  //     let vh = window.innerHeight * 0.01;
  //     document.documentElement.style.setProperty('--vh', `${vh}px`)
  // }, [])

  
  return (
    <>
      <Header />
      <div style={{display: 'flex', flexDirection: 'column', padding: "0 20px 0 20px"}}>
        <Hero/>
        <About/>
        <Work allWerkData={allWerkData} windowWidth={size.width}/>
        <Contact/>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio