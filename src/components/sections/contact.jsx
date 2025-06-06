import styles from './contact.module.css'
import Image from "next/image";

const Contact = () => {
  const socialIconSize = "70"
  
  return (
    <section id="contact" className={styles["contact-container"]} data-section>
      <h1>
        Contact
      </h1>
      <p className={styles["first-blurb"]}>
       I am available for full-time employment, collaboration and freelance work.
      </p>
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
    </section>
  )
}

export default Contact