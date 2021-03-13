import Head from 'next/head';
import styles from '../styles/Home.module.css';
import NowPlaying from '../components/NowPlaying';

import Clock from '../components/Clock';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About | Kai Lukas Marquardt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a className={styles.back} href="/">Back</a>
      <div className={styles.backgroundblur}></div>
      <NowPlaying/>
      <Clock />
      <main className={styles.main}>
        <h1 className={styles.title}>
          About me
        </h1>
        <p className={styles.description}>
        I currently develop with TypeScript, React, Node.js and Next.js.</p>

        <div className={styles.grid}>
          <p>coming soon</p>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
