import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import NowPlaying from '../components/NowPlaying';
import { motion } from 'framer-motion';



import Clock from '../components/Clock';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Kai Lukas Marquardt</title>
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
        <h1 className={styles.title}>
        About
        </h1>
        <div className={styles.grid}>
          <p><img className={styles.aboutavatar} src="/assets/images/avatar.jpg" height="140" height="140" alt="avatar" />Hi. I'm Kai, I'm 17 years old and I'm from Germany. I am a self-taught full-stack javascript engineer with 2 years of experience.</p>
        </div>
      </main>
      </motion.div>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
