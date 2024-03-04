import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Work from '@/components/sections/work'
import Contact from '@/components/sections/contact'
import { useEffect } from 'react'
import { getSortedWerkData } from '/lib/work'
import { CustomModal } from '@/components/custom-modal'
import { useRouter } from 'next/router'

export default function Home({ allWerkData }) {

  let router = useRouter();

// runs this when loading, dynamically measure viewport height taking into account browsers built-in bottom and top bars
// this is not dynamically responsive, but will work on refresh and also need to put in media query for screens greater than
// 1650 pixels wide (change containers size to prevent wrap)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sections = document.querySelectorAll('section')
      sections[0].style.setProperty('--vh', `${window.innerHeight}px`)
    }
  }, [])

  
  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', padding: "0 20px 0 20px"}}>
        <Hero/>
        <About/>
        <Work allWerkData={allWerkData}/>
        <Contact/>
        <CustomModal>
        </CustomModal>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allWerkData = await getSortedWerkData();
  return {
    props: {
      allWerkData,
    },
  };
}




