import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HAŁASTRA</title>
        <meta name="description" content="HAŁASTRA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
      <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      />

<motion.div

initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5, delay: 1.5 }}
>

      <main className={styles.main}>

        <img className="cover" src="/ijtm.jpeg" />
        <a className="buy" target="_blank" href="https://muzyka.sklep.pl/ijtm" rel="noopener noreferrer">
          <img src="/button.png" />
        </a>
      
      </main>

      </motion.div>
    </div>
  )
}
