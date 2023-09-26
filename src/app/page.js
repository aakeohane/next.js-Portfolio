'use client'

import styles from './page.module.css'
import Header from './components/header'
import About from './components/sections/about'
import Landing from './components/sections/landing'
import Work from './components/sections/work'
import Contact from './components/sections/contact'
import RootLayout from './layout'
import { useState, useEffect } from 'react'

export default function Home() {

  const mainSections = [<Landing/>, <About/>, <Work/>, <Contact/>]

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    // must do this for proper webpack build
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        setOffset(window.scrollY)
      }
    }
  }, []) //creates {offset} value for scroll position

  return (
    <RootLayout>
      <Header offset={offset}/>
      <div className={styles.main}>
        {mainSections.map((page, index) => (
            <div key={index} className={styles.content}>
              {page}
            </div>
          ))}
      </div>
    </RootLayout>
  )
}
