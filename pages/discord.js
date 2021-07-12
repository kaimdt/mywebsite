import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link'
import Navbar from '../components/Navbar';
import NowPlaying from '../components/NowPlaying';
import { motion } from 'framer-motion';



import Clock from '../components/Clock';

export default function Discord() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discord | Kai Lukas Marquardt</title>
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
        Discord
        </h1>
        <p className={styles.description}>
        Neryon#7686</p>
      </main>
      </motion.div>
      <footer className={styles.footer}>
        <div className={styles.cell}>
          <div className={styles.row}>
            <div className={styles.cell}>
              <div className={styles.c2414}>
                <a href="https://media.leryon.com"><svg className={styles.footerbrandmark} width="30" height="30" viewBox="0 0 30 30">
                  <path d="M 3.746e-4,2.209e-4 V 14.998994 H 7.4995742 V 7.499795 H 14.998772 V 5.954e-4 H 1e-7 Z M 30,29.999779 V 15.001007 h -7.499197 v 7.499197 h -7.499201 v 7.4992 z" />
                </svg></a>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.c2238}>
                <p>©2021 Leryon MEDIA. All Rights Reserved.</p>
              </div>
            </div>
            <div className={styles.cell}>
              <div className={styles.c2326}>
               <Link href="/imprint">Imprint</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
