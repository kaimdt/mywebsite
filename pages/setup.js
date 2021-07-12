import Head from 'next/head';
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import NowPlaying from '../components/NowPlaying';
import { motion } from 'framer-motion';



import Clock from '../components/Clock';

export default function Setup() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Setup | Kai Lukas Marquardt</title>
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
        <h3 className={[styles.title]}>
        Hardware
        </h3>
        <div className={styles.textleft}>
        <p>GPU: <a href="https://www.amazon.de/ROG-Strix-RTX2070-O8G-Gaming-Grafikkarte-Nvidia-Speicher-Displayport/dp/B07JVWY7SJ/ref=sr_1_1?__mk_de_DE=ÅMÅŽÕÑ&dchild=1&keywords=asus+Nvidia+GeForce+RTX+2070+OC&qid=1618906473&sr=8-1">Nvidia GeForce RTX 2070 OC</a></p>
        <p>CPU: <a href="https://www.amd.com/de/products/cpu/amd-ryzen-5-3600x">AMD Ryzen 5 3600X</a></p>
        <p>CPU Cooler: <a href="https://www.corsair.com/de/de/Kategorien/Produkte/Flüssigkühlung/Doppel-Flüssigkühler/Hydro-Series™-RGB-Platinum/p/CW-9060039-WW">Hydro Series™ H100i RGB PLATINUM 240-mm-CPU-Flüssigkeitskühler</a></p>
        <p>Mainboard: <a href="https://de.msi.com/Motherboard/B450M-PRO-VDH-MAX">MSI B450M PRO-VDH MAX</a></p>
        <p>PCU: <a href="https://www.corsair.com/de/de/Kategorien/Produkte/Netzgeräte/Hochleistungs-Netzgeräte/RM-Series™-80-PLUS-Gold-Power-Supplies/p/CP-9020195-EU">RM Series RM750</a></p>
        <p>Case: <a href="https://www.corsair.com/de/de/Kategorien/Produkte/Gehäuse/Mid-Tower-ATX-Gehäuse/275R-Airflow-Tempered-Glass-Mid-Tower-Gaming-Case/p/CC-9011182-WW">Corsair 275R Airflow (Tempered Glass)</a></p>
        <p>Case Fans: <a href="https://www.corsair.com/de/de/Kategorien/Produkte/Lüfter/Lüfter-mit-Magnetschwebelager/LL-White-RGB-Dual-Light-Loop-RGB-LED-PWM-Fan/p/CO-9050092-WW">Corsair LL120 RGB LED</a></p>
        <p>Memory: <a href="https://www.corsair.com/de/de/Kategorien/Produkte/Arbeitsspeicher/Vengeance-PRO-RGB-Black/p/CMW32GX4M4K4000C19">VENGEANCE® RGB 32 GB (4 x 8 GB) DDR4 DRAM 4.000 MHz</a></p>
        <p>Storage NVMe M.2 SSD: <a href="https://www.samsung.com/uk/memory-storage/nvme-ssd/970-evo-plus-nvme-m-2-ssd-1tb-mz-v7s1t0bw/">970 EVO Plus NVMe M.2 SSD 1TB</a></p>
        <p>Storage SSD: <a href="https://www.samsung.com/de/memory-storage/sata-ssd/860-evo-sata-3-2-5-inch-ssd-1tb-mz-76e1t0b-eu/">860 EVO SATA III 2,5 Zoll SSD</a></p>
        <p>Headset + Micro: <a href="https://teufel.de/cage-105958000">Teufel CAGE 2020</a></p>
        <p>Headset: <a href="https://www.beyerdynamic.de/dt-990-pro.html?gclid=EAIaIQobChMI1MLm08WM8AIVF893Ch0UPg_bEAQYBSABEgJ54PD_BwE">DT 990 PRO</a></p>
        <p>Mouse: <a href="https://de.roccat.org/Mice/Kone-AIMO-Remastered">Roccat Kone Aimo</a></p>
        <p>Keyboard: <a href="https://www.corsair.com/de/de/Kategorien/Produkte/Gaming-Tastaturen/Mechanische-RGB-Gaming-Tastaturen/K70-RGB-MK-2/p/CH-9109011-DE">K70 RGB MK.2 Mechanical Gaming Keyboard — CHERRY® MX Blue (DE)</a></p>
        <h3 className={styles.title}>
        Software
        </h3>
        <p>Python IDE: <a href="https://www.jetbrains.com/pycharm/">PyCharm Community Edition 2020.3.3</a></p>
        <p>Nodejs IDE: <a href="https://www.jetbrains.com/webstorm/">WebStorm 2020.3.2</a></p>
        <p>Other IDE: <a href="https://code.visualstudio.com">Visual Studio Code</a></p>
        <div className={styles.grid}>
          <p>coming soon</p>
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
