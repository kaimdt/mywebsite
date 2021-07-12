import Head from 'next/head';
import Link from 'next/link'
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
          <p><img className={styles.aboutavatar} src="/assets/images/avatar.jpg" height="140" width="140" alt="avatar" />Hi. I'm Kai, I'm 17 years old and I'm from Germany. I am a self-taught full-stack javascript engineer with 2 years of experience. This September I will start an apprenticeship as an IT specialist for application development. I have always been passionate about programming and have already gained some experience in different areas. As a result, I have specialized in development with NodeJS and Python.
		  </p>
        <div Style={"display: flex;"}>
          <a Style={"margin-right: 5px;"} href="https://github.com/kaimdt"><div className=""><i Style={"height: 19px; position: relative; top: 3px;"} className="fab fa-github"></i> GitHub</div></a>
          <a Style={"margin-right: 5px;"} href="/discord" ><div className=""><i Style={"height: 19px; position: relative; top: 3px;"} className="fab fa-discord"></i> Discord</div></a>
          <a Style={"margin-right: 5px;"} href="mailto://inbox@kaimdt.com" ><div className=""><i Style={"height: 19px; position: relative; top: 3px;"} class="fas fa-envelope"></i> E-Mail</div></a>
          <a Style={"margin-right: 5px;"} href="https://twitter.com/lucnema" ><div className=""><i Style={"height: 19px; position: relative; top: 3px;"} className="fab fa-twitter"></i> Twitter</div></a>
        </div>
        </div>
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
