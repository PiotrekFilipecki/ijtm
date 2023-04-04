import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  hidden: { opacity: 0},
  enter: { opacity: 1},
  exit: { opacity: 0},
}

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence
    mode="wait"
    //exitBeforeEnter

    variants={variants}

>

    <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
