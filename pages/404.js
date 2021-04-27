import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import NowPlaying from '../components/NowPlaying';
import { motion } from 'framer-motion';



import Clock from '../components/Clock';

export default function Custom404() {
    return (
    <div className={styles.container}>
      <Head>
        <title>404 | Kai Lukas Marquardt</title>
        <link rel="icon" href="/favicon.ico" />
        <script defer src="/all.js"></script>
      </Head>
      <div className={styles.backgroundblur}></div>
      <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>
      <NowPlaying/>
      <Clock />
      </motion.div>
      <Navbar/>
      <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>
      <main className={styles.main}>
        <h1 className={styles.errortitle}>
        504
        </h1>
        <div className={styles.grid}>
          <p>The page you requested was not found.</p>
        </div>
      </main>
      </motion.div>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
