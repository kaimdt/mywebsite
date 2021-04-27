import React from 'react';
import Link from 'next/link'
import navbar from '../styles/navbar.module.css';

export default class Navbar extends React.Component {
    render() {
        return (
        <nav className={navbar.navbar}>
        <p className={navbar.brandmark}>Kaimdt</p>
        <ul>
          <li><Link href="/"><a className={navbar.navlink} data-tooltip="Home"><div className=""><i className="fas fa-home"></i> Home</div></a></Link></li>
          <li><Link href="/projects"><a className={navbar.navlink} data-tooltip="Projects"><div className=""><i className="fas fa-code"></i> Projects</div></a></Link></li>
          <li><Link href="/about"><a className={navbar.navlink} data-tooltip="Projects"><div className=""><i class="fas fa-address-card"></i> About</div></a></Link></li>
          <li><Link href="/blog"><a className={navbar.navlink} data-tooltip="Projects"><div className=""><i class="fas fa-newspaper"></i> Blog</div></a></Link></li>
          <li><Link href="/setup"><a className={navbar.navlink} data-tooltip="Setup"><div className=""><i class="fas fa-desktop"></i> Setup</div></a></Link></li>
          <li><a className={navbar.navlink} href="https://github.com/kaimdt" data-tooltip="GitHub"><div className=""><i className="fab fa-github"></i> GitHub</div></a></li>
          <li><a className={navbar.navlink} href="/discord" data-tooltip="Discord"><div className=""><i className="fab fa-discord"></i> Discord</div></a></li>
          <li><a className={navbar.navlink} href="mailto://inbox@kaimdt.com" data-tooltip="Discord"><div className=""><i class="fas fa-envelope"></i> E-Mail</div></a></li>
          <li><a className={navbar.navlink} href="https://twitter.com/lucnema" data-tooltip="Twitter"><div className=""><i className="fab fa-twitter"></i> Twitter</div></a></li>
        </ul>
      </nav>
    )}
}