import '@/styles/globals.css';
import Layout from '../components/layout';
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const bebasNeue = localFont({
  src: '../../public/fonts/BebasNeue-Regular.ttf',
  display: 'swap',
})

const blowbrush = localFont({
  src: '../../public/fonts/blowbrush.otf',
  display: 'swap'
})

const blastimo = localFont({
  src: '../../public/fonts/Blastimo.ttf',
  display: 'swap'
})

const blastimoSwash = localFont({
  src: '../../public/fonts/Blastimo Swash.ttf',
  display: 'swap'
})

export const blastimoFontClass = blastimo.className
export const blowbrushFontClass = blowbrush.className
export const blastimoSwashFontClass = blastimoSwash.className
export const interFontClass = inter.className
export const bebasNeueFontClass = bebasNeue.className

export default function App({ Component, pageProps }) {

  return (
    <Layout>
      <Head>
        <title>Aaron Keohane</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name='description' content='Portfolio of work, contact info and about Aaron Keohane' />
          <link rel="icon" href="/favicon.svg" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}