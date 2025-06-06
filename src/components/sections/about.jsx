import styles from './about.module.css'
import Image from 'next/image';
import profilePic from 'public/images/professional-portrait-v3-watercolor-v3.png'

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
          <p>
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
        </div>
      </div>
    </section>
  )
}

export default About