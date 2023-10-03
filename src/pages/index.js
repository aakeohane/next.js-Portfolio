import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Work from '@/components/sections/work'
import Contact from '@/components/sections/contact'

import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Aaron Keohane</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name='description' content='Portfolio of work, contact info and about Aaron Keohane' />
          <link rel="icon" href="/favicon.svg" sizes="any" />
      </Head>
      <div style={{display: 'flex', flexDirection: 'column', padding: "0 20px 0 20px"}}>
        <Hero/>
        <About/>
        <Work/>
        <Contact/>
      </div>
    </>
  )
}
