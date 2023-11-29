import {blastimoFontClass } from '@/pages/_app.js';
import styles from './footer.module.css'

import TwitterIcon from '/public/images/svg/twitter.svg';
import GithubIcon from '/public/images/svg/github.svg';
import LinkedinIcon from '/public/images/svg/linkedin.svg';


const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div style={{position: "relative"}} className={`${blastimoFontClass}`}>
          <span style={{fontSize: "2rem", position: "absolute", left: "-17px", top: "-1px"}}>©</span><span style={{fontSize: "1.25rem"}}>{new Date().getFullYear()}</span> Aaron Keohane
        </div>
        <div className="social_icons">
          <a
            href="https://twitter.com/Aakeocaine"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className={styles["twitter-icon"]} />
          </a>
          <a
            href="https://github.com/aakeohane"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className={styles["github-icon"]} />
          </a>
          <a
            href="https://www.linkedin.com/in/aaron-keohane-47112430/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className={styles["linkedin-icon"]} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer;