import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import blog from '../styles/blog.module.css';
import NowPlaying from '../components/NowPlaying';
import { motion } from 'framer-motion';




function Imprint() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Imprint | Kai Lukas Marquardt</title>
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
      <div className={blog.container} Style={"margin: 150px 0;"}>
        <div className={blog.header}>
          <p className={blog.title} align="center">Imprint</p>
        </div>
        <div className={blog.content}>
          <div className="_3awdewAIChIne2HIdbMlsx"><h3 className="_13wfyNyFKbMnKt3fPhpoi6">Legal Disclosure</h3><div className="_1LbvbPl5tqYgxolEKvLy2m"><div> Information in accordance with Section 5 TMG <br /><br /><p><b>Leryon</b><br />Beethovenstraße 9A<br />D-86438 Kissing</p> <br /><p><b>Leryon MEDIA</b><br />Beethovenstraße 9B<br />D-86438 Kissing</p> <br /><p>Leryon &amp; Leryon MEDIA are represented by Kai Marquardt and Tim Marquardt</p> <br /><h2>Contact Information</h2>Telephone: coming soon <br />E-Mail: <a href="mailto:info@leryon.com" link>info@leryon.com</a> <br />Right Infringement E-Mail: <a href="mailto:infringement@leryon.com" link>infringement@leryon.com</a> <br /><h2>Graphics and Image Sources</h2> All wallpapers that come from Spotify (see below right) are provided by Spotify and are temporary. All images that are not marked with an extra copyright (exception are the background images) are from me personally or I have the permission to use the image.<h2>Disclaimer</h2><h4>Accountability for content</h4>The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this matter, please note that we are not obliged to monitor the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG). <br /><br /><h4>Accountability for links</h4> Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately. <br /><br /><h4>Copyright</h4> Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.</div></div></div>

        </div>
      </div>
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

export default Imprint
