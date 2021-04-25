import Head from 'next/head';
import styles from '../styles/Home.module.css';
import projects from '../styles/projects.module.css';
import Navbar from '../components/Navbar';
import NowPlaying from '../components/NowPlaying';
import { motion } from 'framer-motion';



import Clock from '../components/Clock';

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects | Kai Lukas Marquardt</title>
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
        Projects
        </h1>

        <div className={projects.container}>
          <a href="https://leryon.com" className={projects.project}>
            <img className={projects.brandmark} src="/assets/images/Leryon Brandmark Light.png" />
            <div className={projects.textblock}>
            <h2>Leryon</h2>
            <p className={projects.description}>Leryon is a different kind of social media network. It offers you the best opportunity to create a suitable place for your community and yourself. Frontend: React Backend: NodeJS and Python</p>
            </div>
          </a>
          <a className={projects.project}>
            <p className={projects.brandmark}>KAIMDT</p>
            <div className={projects.textblock}>
            <h2>kaimdt.com</h2>
            <p className={projects.description}>You are on this page. It was made with love.</p>
            </div>
          </a>
          <a className={projects.project}>
            <p className={projects.brandmark}>CLIME</p>
            <div className={projects.textblock}>
            <h2>Clime</h2>
            <p className={projects.description}>Server Hosting.</p>
            </div>
          </a>
        </div>
      </main>
      </motion.div>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
