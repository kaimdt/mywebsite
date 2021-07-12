import React from 'react';
import Link from 'next/link'
import navbar from '../styles/navbar.module.css';
//<p className={navbar.brandmark}>kaimdt</p>
export default class Navbar extends React.Component {
    render() {
        return (
        <nav id="navbar" className={navbar.navbar}>
        <div className={navbar.brandmark}>
          <Link href="/"><svg className={navbar.brandmark} width="135" height="40" viewBox="0 0 323.089 96.137"><path d="M-117.307 35.029q.909 0 2.695 0-1.455 1.918-4.382 5.755 1.521 2.034 4.548 6.102-.893 0-2.679 0-1.422-1.852-4.233-5.556 0-.347 0-1.058 1.009-1.306 2.034-2.629 1.009-1.306 2.017-2.613zm-6.995 0q.777 0 2.332 0 0 1.753 0 5.242 0 .347 0 1.058 0 1.852 0 5.556-.777 0-2.332 0 0-2.96 0-5.92 0-2.977 0-5.937zm14.205-.033q.959 0 2.894 0 1.389 3.952 4.167 11.857-.843 0-2.547 0-.645-1.918-1.472-4.399-.843-2.497-1.588-4.762-.843 2.514-1.521 4.647-.695 2.133-1.554 4.514-.843 0-2.53 0 1.042-2.96 2.084-5.92 1.025-2.96 2.067-5.937zm8.202.016q.579 0 2.332 0 0 2.96 0 11.857-.579 0-2.332 0 0-2.96 0-11.857zm17.616 5.832q0 2.96 0 11.857-.579 0-2.315 0 0-1.918 0-7.689-.843 1.373-3.34 5.507-.066 0-.265 0-.843-1.373-3.34-5.49 0 1.918 0 7.673-.579 0-2.332 0 0-2.96 0-11.857.595 0 2.398 0 .843 1.406 3.407 5.606.843-1.406 3.39-5.606.595 0 2.398 0zm2.2 0q1.571 0 4.713 0 1.207 0 2.232.43 1.009.43 1.836 1.29.81.843 1.224 1.902.413 1.058.413 2.315 0 1.257-.413 2.299-.413 1.058-1.224 1.918-.827.843-1.836 1.273-1.025.43-2.232.43-1.571 0-4.713 0 0-2.613 0-7.838.777 0 2.332 0 0 1.869 0 5.606.794 0 2.381 0 .761 0 1.389-.265.628-.248 1.108-.761.48-.513.728-1.174.232-.678.232-1.488 0-.827-.232-1.488-.248-.678-.728-1.191-.48-.513-1.108-.761-.628-.248-1.389-.248-.794 0-2.381 0-.777 0-2.332 0 0-.562 0-1.124 0-.562 0-1.124zm16.734 4.498q0 2.447 0 7.375-.777 0-2.332 0 0-2.464 0-7.375.579 0 1.174 0 .579 0 1.158 0zm-5.507-4.481q2.894 0 8.715 0 0 .744 0 2.232-1.075 0-3.208 0-.777 0-2.332 0-1.058 0-3.175 0 0-.546 0-1.108 0-.562 0-1.124zm-55.107-5.951q-.463 0-1.836 0 0 2.762 0 11.03.463 0 1.836 0 0 .529 0 2.1-1.009 0-4.018 0 0-3.803 0-15.23 1.009 0 4.018 0 0 .529 0 2.1zm69.845 4.648q0 3.803 0 15.23-1.009 0-4.018 0 0-.513 0-2.1.463 0 1.836 0 0-2.745 0-11.03-.463 0-1.836 0 0-.529 0-2.1 1.009 0 4.018 0zm-68.411 11.134h25.031v2.005h-25.031zm28.444-15.668h34.135v2.005h-34.135z" transform="matrix(4.374117 0 0 4.374117 567.66878 -143.36797)"/></svg></Link>
        </div>
        <ul>
          <li><Link href="/"><a className={navbar.navlink}><div className=""><i className="fas fa-home"></i> Home</div></a></Link></li>
          <li><Link href="/projects"><a className={navbar.navlink}><div className=""><i className="fas fa-code"></i> Projects</div></a></Link></li>
          <li><Link href="/about"><a className={navbar.navlink}><div className=""><i class="fas fa-address-card"></i> About</div></a></Link></li>
          <li><Link href="/blog"><a className={navbar.navlink}><div className=""><i class="fas fa-newspaper"></i> Blog</div></a></Link></li>
          <li><Link href="/setup"><a className={navbar.navlink}><div className=""><i class="fas fa-desktop"></i> Setup</div></a></Link></li>
          {/*
          <li><a className={navbar.navlink} href="https://github.com/kaimdt"><div className=""><i className="fab fa-github"></i> GitHub</div></a></li>
          <li><a className={navbar.navlink} href="/discord" ><div className=""><i className="fab fa-discord"></i> Discord</div></a></li>
          <li><a className={navbar.navlink} href="mailto://inbox@kaimdt.com" ><div className=""><i class="fas fa-envelope"></i> E-Mail</div></a></li>
          <li><a className={navbar.navlink} href="https://twitter.com/lucnema" ><div className=""><i className="fab fa-twitter"></i> Twitter</div></a></li>
		      <li><a className={navbar.navlink} href="https://leryon.com/imprint" ><div className=""><i className="fab fa-copyright"></i> Imprint</div></a></li>
          */}
        </ul>
      </nav>
    )}
}