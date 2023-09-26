import './globals.css'
import { Inter, Bebas_Neue } from 'next/font/google'
import localFont from 'next/font/local'
import styles from './layout.module.css'

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

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <title>Aaron Keohane</title>
        <meta name='description' content='Portfolio of work, contact info and about Aaron Keohane' />
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`${inter.className} ${styles.container}`}>{children}</body>
    </html>
  )
}
