import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import NowPlaying from '../components/NowPlaying';
import WeatherCard from '../components/WeatherCard';
import { motion } from 'framer-motion';




import Clock from '../components/Clock';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kai Lukas Marquardt</title>
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
      <Navbar />
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

        <div className={styles.profile}>
          <div className={styles.profileleft}>
            <img className={styles.avatar} src="/assets/images/avatar.jpg" height="140" height="140" alt="avatar" />
          </div>
          <div className={styles.profileright}>
            <h1 className={styles.title}>
              Kai Lukas Marquardt
            </h1>
          </div>
        </div>
        <p className={styles.description}>
        Node.JS, TypeScript, React, Next.Js and Python</p>
        <WeatherCard />
      </main>
      </motion.div>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
