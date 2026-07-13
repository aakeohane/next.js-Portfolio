import {blastimoFontClass } from '@/app/layout';
import styles from './footer.module.css'
import Link from 'next/link';
import Image from "next/image";
import twitterIcon from "public/images/TwitterX-splash-icon.png"
import linkedInIcon from "public/images/LinkedIn-splash-iconv2.png"
import githubIcon from "public/images/github-splash-icon.png"
import AKIcon from "public/images/AK.png"

const socialIconSize = "30"


const Footer = () => {
  return (
    <>
      <div className={styles["footer-container"]}>
        <div>
          <Image 
            src={AKIcon}
            width={socialIconSize*1.5}
            height={socialIconSize*1.5}
            alt="AK Logo"
          />
        </div>
        <div className={styles["social-icons-container"]}>
            <Link
              href="https://twitter.com/Aakeocaine"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["twitter-icon"]}  

            >
              <Image 
                src={twitterIcon}
                width={socialIconSize}
                height={socialIconSize}
                alt="Twitter Logo"
              />
            </Link>
            <Link
              href="https://github.com/aakeohane"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["github-icon"]}
            >
              <Image 
                src={githubIcon}
                width={socialIconSize}
                height={socialIconSize}
                alt="Github Logo"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aaron-keohane-47112430/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["linkedin-icon"]} 
            >
              <Image 
                src={linkedInIcon}
                width={socialIconSize}
                height={socialIconSize}
                alt="LinkedIn Logo"
              />
            </Link>
        </div>
        <div className={`${blastimoFontClass}`}>
          <span>©</span><span style={{fontSize: "1.25rem"}}>{new Date().getFullYear()}</span> Aaron Keohane
        </div>
         
      </div>
    </>
  )
}

export default Footer;