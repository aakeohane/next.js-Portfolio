import '@/styles/globals.css';
import Layout from '../components/layout';
import { Inter, Bebas_Neue } from 'next/font/google'
import localFont from 'next/font/local'
import { useRouter } from 'next/router';
import NoLayout from '@/components/layout-alt';

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

  const router = useRouter();
  const withoutLayoutArray = [
    'work'
  ];

  const isWithoutLayout = router.pathname.includes(withoutLayoutArray);

  return isWithoutLayout ? (
    <NoLayout>
      <Component {...pageProps} />
    </NoLayout>
  ) : (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}