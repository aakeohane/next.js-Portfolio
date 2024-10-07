'use client'
import Image from "next/image"
import styles from './project-details.module.css'
import { useContext } from "react"
import { ModalContext } from "./custom-modal"
import Footer from "./footer"

const { getWork } = require("@/lib/werk")

const ProjectDetails = ({slug}) => {
  const werk = getWork(slug)
  const modalOpen = useContext(ModalContext)


  return (
    <div className={styles["modal-container"]}>

      <div className={styles["modal-first-section"]}>
        <div className={styles["title-container"]}>
          <h2>{werk.title}</h2>
          <div className={styles["modal-favicon-container"]}>
            <Image
              className={styles["favicon"]}
              alt="favicon for project" 
              src={werk.favicon}
              width={10}
              height={10}
            />
          </div>
        </div>
        <p className={styles["modal-title-description"]}>{werk.titleDescription}</p>
      </div>

      <div className={styles["modal-image-container"]}>
        <Image
          className={`${modalOpen ? styles["modal-image"] : styles["parallel-image"]}` }
          alt="example" 
          src={werk.image}
          sizes="100vw"
          width={300}
          height={100}
        />
      </div>

      <div className={styles["modal-third-section"]}>
        <p>{werk.description}</p>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectDetails