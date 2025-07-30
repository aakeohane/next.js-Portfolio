import styles from './project-details.module.css'
import { useContext } from "react"
import Footer from "./footer"
import { ModalContext } from "@/app/context/provider"
import Image from "next/image";
import inkBlotLeft from 'public/images/leftside.png'
import inkBlotRight from 'public/images/rightside.png'
import Link from 'next/link';

const { getWork } = require("@/lib/werk")

const ProjectDetails = ({slug, parRoute}) => {
  const werk = getWork(slug)
  const modalOpen = useContext(ModalContext)

  const parallelRouteClass = `${styles["modal-container"]} ${parRoute && styles["modal-container-par"]}`;

  return (
    <div className={parallelRouteClass}>

      <div className={styles["modal-first-section"]}>
        <div className={styles["title-container"]}>
          <h4>{werk.title}</h4>
          <div className={styles["modal-favicon-container"]}>
            {/* if favicon image exists, display next to title else nothing */}
            {werk.favicon ? 
            <Image

              className={styles["favicon"]}
              alt="favicon for project" 
              src={werk.favicon}
              width={20}
              height={20}
            />
            :
            null
            }
          </div>
        </div>
        <div className={styles["programs-container"]}>
          {/* loop through images and give a tooltip (title) based on image, love a good switch statement */}
            {werk.programsUsed.map(( program ) => {
              const renderTooltip = () => {
                switch (program) {
                  case "/images/utilities/CSS3_icon.png":
                    return "CSS";
                  case "/images/utilities/JS-icon.png":
                    return "JavaScript";
                  case "/images/utilities/html5-icon.png":
                    return "HTML5";
                  case "/images/utilities/react_native_icon.png":
                    return "React";
                  case "/images/utilities/Json-icon.png":
                    return "JSON";
                  case "/images/utilities/webpack-icon.png":
                    return "Webpack";
                  case "/images/utilities/firebase-icon.png":
                    return "Firebase";
                  case "/images/utilities/WordPress-icon.png":
                    return "Wordpress";
                  default:
                    return null;
                }
              };
              return (
              <Image
                key={program}
                className={styles["program"]}
                alt="programs Used" 
                src={program}
                height={100}
                width={100}
                title={renderTooltip()}
              />
              )
            })}
          </div>
          <div className={styles["title-description-container"]}>
            <p className={styles["modal-title-description"]}>{werk.titleDescription}</p>
          </div>
      </div>

      <div className={styles["modal-image-container"]}>
        <Image
          className={`${modalOpen ? styles["modal-image"] : styles["parallel-image"]}` }
          alt="example" 
          src={werk.image}
          sizes="100vw"
          width={300}
          height={100}
          priority
        />
      </div>

      <div className={styles["modal-third-section"]}>
        <p className={styles["project-description"]}>{werk.description}</p>
        <div className={styles["example-link-container"]}>
          <div className={styles["github-link-container"]}>
            {
            // this is a one off instance to check for multiple links in library werk.js content
            typeof werk.githubLink !== "object" ?
            <button className={styles['example-button']}>
              <Link
                key={werk.order}
                href={werk.githubLink}
                target="_blank"
              >The Code
              </Link>
            </button>
              :
              Object.entries(werk.githubLink).map(link => {
                return (
                  <div className={styles['github-link']}>
                    <p>{link[0]}:</p>
                    <button className={styles['example-button']}>
                      <Link
                        key={link[0]}
                        href={link[1]}
                        target="_blank"
                      >The Code
                      </Link>
                    </button>
                  </div>
              )
              })
            }
          </div>
          <div className={styles["github-link-container"]}>
            {
            // this is a one off instance to check for multiple links in library werk.js content
            typeof werk.liveSiteLink !== "object" ?
            <button className={styles['example-button']}>
              <Link
                href={werk.liveSiteLink}
                target="_blank"
                >Live Site
              </Link>
            </button>
              :
              Object.entries(werk.liveSiteLink).map(link => {
                return (
                  <div className={styles['github-link']}>
                    <p>{link[0]}:</p>
                    <button className={styles['example-button']}>
                      <Link
                        key={link[0]}
                        href={link[1]}
                        target="_blank"
                      >Live Site
                      </Link>
                    </button>
                  </div>
                )
              })
            }
            </div>
        </div>
        <div className={styles["ink-blot-left-flex-container"]}>
          <div className={styles["ink-blot-left-container"]}>
            <Image
              alt="inkblot left" 
              src={inkBlotLeft}
              width={150}
              className={styles["ink-blot-left"]}
            />
          </div>
          {
            // check for parallel route and add footer, otherwise wont need footer for modal
            parRoute ? <Footer /> : null
            
          }
        </div>
      </div>
        <div className={styles["ink-blot-right-container"]}>
          <Image
            alt="inkblot right" 
            src={inkBlotRight}
            width={120}
            className={styles["ink-blot-right"]}
          />
        </div>
    </div>
  )
}

export default ProjectDetails