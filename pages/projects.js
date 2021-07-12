import Head from 'next/head';
import Link from 'next/link'
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
            <p className={projects.description}>Leryon is a different kind of social media network. It offers you the best opportunity to create a suitable place for your community and yourself.</p>
            </div>
            <div className={projects.language}><a data-tooltip="NodeJS"><i class="fab fa-node-js"></i></a><a data-tooltip="Python"><i class="fab fa-python"></i></a><a data-tooltip="React"><i class="fab fa-react"></i></a></div>
          </a>
          <a href="https://github.com/kaimdt/mywebsite" className={projects.project}>
          <img className={projects.brandmark} src="/assets/images/kaimdt_brandmark.png" />
            <div className={projects.textblock}>
            <h2>kaimdt.com</h2>
            <p className={projects.description}>You are on this page. It was made with love.</p>
            </div>
            <div className={projects.language}><a data-tooltip="NodeJS"><i class="fab fa-node-js"></i></a><a data-tooltip="React"><i class="fab fa-react"></i></a></div>
          </a>
          <a href="https://github.com/kaimdt/leryon-with-php" className={projects.project}>
            <p className={projects.brandmark}>LAP</p>
            <div className={projects.textblock}>
            <h2>Leryon with PHP aka. LAP (Leryon Application with PHP)</h2>
            <p className={projects.description}>Leryon was still developed with PHP until the end of 2020. Since the beginning of 2020 we are rewriting the entire source code in NodeJS and Python. Since we are no longer developing Leryon in PHP, we have decided to develop a Leryon PHP version, as we want to continue to push PHP.</p>
            </div>
            <div className={projects.language}><a data-tooltip="PHP"><i class="fab fa-php"></i></a></div>
          </a>
          <a className={projects.project}>
            <p className={projects.brandmark}>SH-Music</p>
            <div className={projects.textblock}>
            <h2>Share Music</h2>
            <p className={projects.description}>With Share Music you can share your phone audio to other phones to listen to the same music everywhere at the next party.</p>
            </div>
            <div className={projects.language}><a data-tooltip="Java"><i class="fab fa-java"></i></a><a data-tooltip="Python"><i class="fab fa-python"></i></a><a data-tooltip="Swift"><i class="fab fa-swift"></i></a></div>
          </a>
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
