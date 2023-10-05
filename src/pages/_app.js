import '@/styles/globals.css';
import Layout from '../components/layout';
import { Inter, Bebas_Neue } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
  display: 'swap',
})

const blastimo = localFont({
  src: '../../public/fonts/Blastimo.ttf',
  display: 'swap'
})
const blowbrush = localFont({
  src: '../../public/fonts/blowbrush.otf',
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
      {/* <Image
        alt="background"
        layout='fill'
        objectFit='cover'
        sizes="100vw"
        src="/images/watercolor-paper-background-2.jpg"
      /> */}
      <Component {...pageProps} />
    </Layout>
  );
}