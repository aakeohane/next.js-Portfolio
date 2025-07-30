import styles from './about.module.css'
import Image from 'next/image';
import profilePic from 'public/images/professional-portrait-v3-watercolor-v3.png'
import Link from 'next/link';

const About = () => {

  return (
    <section id="about" data-section>
      <div className={styles["about-container"]}>
        <div className={styles["portrait-container"]}>
              <Image
                alt="personal logo" 
                src={profilePic}
                className={styles["portrait"]}
                priority={true}
                id="portrait"
                fill={true}
              />
                <div id="drop1" className={styles["drop"]}></div>
                <div className={styles["drop"]}></div>
                <div className={styles["drop"]}></div>
        </div>
        <div className={styles["content-container"]}>
          <h1 className={styles["title"]}>How did I know I was destined for coding?</h1>
          <p className={styles["filter"]}>
            I am always the first to google the moment someone asks a question.
            Besides my googling talent, my academic background in the sciences 
            has prepared me to problem solve, critically evaluate, and think 
            imaginatively when facing technical challenges. Thankfully, my seemingly 
            perpetual need to know is the perfect characteristic for someone in the 
            tech field and I am ready to keep on learning! I aim to inspire positive 
            environmental change through my work. I love the ocean, typography and 
            living a zero waste lifestyle. When I'm not obsessing about responsive 
            design, you can find me on the tennis courts. Take a peak at my CV below.
          </p>

{/* lofi inkbleed text effect for paragaph */}
<svg height="0" width="0" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="pFilter">
      <feComponentTransfer>
        <feFuncA type="discrete" tableValues="0 0 0 0 1 1 1 1 1 1" />
      </feComponentTransfer>
    </filter>
    <filter id="scribbleBorder">
      <feTurbulence type="fractalNoise" baseFrequency=".1" numOctaves="2" />
      <feDisplacementMap in="SourceGraphic" scale="4" />
    </filter>
  </defs>
</svg>
          <button className={styles["resume-button"]}>
            <Link                        
              href="files/keohane-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >Resume
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default About