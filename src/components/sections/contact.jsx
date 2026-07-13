import Link from 'next/link';
import styles from './contact.module.css'
import Image from "next/image";
import name from "public/images/FullName.png"
import sun from "public/images/Sun-watercolor.png"
import whale from "public/images/whale-watercolor.png"
import twitterIcon from "public/images/TwitterX-splash-icon.png"
import linkedInIcon from "public/images/LinkedIn-splash-iconv2.png"
import githubIcon from "public/images/github-splash-icon.png"

const Contact = () => {
  const socialIconSize = "50"
  
  return (
    <section id="contact" className={styles["contact-container"]} data-section>
      <h1 className={styles["header"]}>
        Contact
      </h1>
      <div className={styles["main-content"]}>
      <Image 
          className={styles["whale"]}  
          src={whale}
          height={200}
          alt="whale"
        />
        <p className={styles["paragraph-font"]}>
        I am available for full-time employment, collaboration and freelance work.
        </p>
        <Image 
        src={name}
        width={300}
        height={300}
        alt="My Name"
        />
        <div className={styles["residence-container"]} >
          <Image 
            className={styles["sun-emoji"]}  
            src={sun}
            width={60}
            alt="Sun"
          />
          <p className={styles["paragraph-font"]}>San Diego, California</p>
        </div>
        <Link                       
          href="files/Keohane_Resume_2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["resume-button"]}
        >
          <span>Resume</span>
        </Link>
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
        </div>
    </section>
  )
}

export default Contact