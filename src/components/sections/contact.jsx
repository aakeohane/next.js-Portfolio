import Link from 'next/link';
import styles from './contact.module.css'
import Image from "next/image";
import name from "public/images/FullName.png"
import sun from "public/images/Sun-watercolor.png"
import whale from "public/images/whale-watercolor.png"

const Contact = () => {
  const socialIconSize = "70"
  
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
        <p className={styles["paragraph-font"]}>San Diego, California</p>
        <Image 
          className={styles["sun-emoji"]}  
          src={sun}
          width={100}
          alt="Sun"
        />
        <button className={styles["resume-button"]}>
            <Link                       
              href="files/Keohane_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >Resume
            </Link>
        </button>
        <div className={styles["social-icons-container"]}>
            <a
              href="https://twitter.com/Aakeocaine"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image 
                className={styles["twitter-icon"]}  
                src='/images/svg/twitter.svg'
                width={socialIconSize}
                height={socialIconSize}
                alt="Twitter Logo"
              />
            </a>
            <a
              href="https://github.com/aakeohane"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image 
                className={styles["github-icon"]}  
                src='/images/svg/github.svg'
                width={socialIconSize}
                height={socialIconSize}
                alt="Github Logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aaron-keohane-47112430/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image 
                className={styles["linkedin-icon"]}  
                src='/images/svg/linkedin.svg'
                width={socialIconSize}
                height={socialIconSize}
                alt="LinkedIn Logo"
              />
            </a>
          </div>
        </div>
    </section>
  )
}

export default Contact