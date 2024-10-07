'use client'
import Image from "next/image"
import styles from './project-details.module.css'
import { useContext } from "react"
import { ModalContext } from "./custom-modal"

const { getWork } = require("@/lib/werk")

const ProjectDetails = ({slug}) => {
  const werk = getWork(slug)
  const modalOpen = useContext(ModalContext)

  return (
    <div>
      {werk.description}
      <Image
          className={`${modalOpen ? styles["modal-image"] : styles["parallel-image"]}` }
          alt="example" 
          src={werk.image}
          sizes="100vw"
          width={300}
          height={100}
        />
    </div>
  )
}

export default ProjectDetails