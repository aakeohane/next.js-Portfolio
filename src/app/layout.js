import '@/styles/globals.css';
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { MyProvider } from './context/provider';


export default function RootLayout({ children, modal }) {  

  return (
    <html lang='en' >
      <body id="bodyEl" suppressHydrationWarning={true}>
          <MyProvider>
            {children}
            <div id="modal-root-id">{modal}</div>
          </MyProvider>
      </body>
    </html>
  )
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const blastimo = localFont({
  src: '../../public/fonts/Blastimo.ttf',
  display: 'swap'
})

const bebasNeue = localFont({
  src: '../../public/fonts/BebasNeue-Regular.ttf',
  display: 'swap',
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

