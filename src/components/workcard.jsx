import Link from "next/link";
import Image from "next/image"
import styles from "./workcard.module.css"
import { useState } from "react"

function Workcard({order, title, image, slug, windowWidth}) {


  const [hover, setHover] = useState(false)

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const hoverTitle = {
    opacity: (windowWidth > 700) ? (hover ? '1' : '0') : null
  }

  const hoverImage = {
    transition: 'transform 1.25s ease-out, filter 1.25s ease-in-out',
    transform: hover ? 'scale(1.4)' : null,
    filter: (windowWidth > 700) ? hover ? 'grayscale(0%)' : 'grayscale(100%)' : null
  }

  const hoverContainer = {
    transition: 'transform 1.25s ease-out',
    transform: hover ? 'scale(.95)' : null,
  }

  return (
      <Link 
        className={styles["workcard-link"]}
        key={order}
        href={`projects/${slug}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        scroll={false}
        shallow={true}>
        <div className={styles["workcard-content-container"]} style={hoverContainer} >
          <Image
            className={styles["workcard-image"]}
            alt="project image" 
            style={hoverImage}
            src={image}
            sizes="100vw"
            width={300}
            height={100}
          />
          <div className={styles["workcard-div"]}>
            <h3 
            className={styles["workcard-title"]}
            style={hoverTitle}
            >
            {title}
            </h3>
          </div>
        </div>
      </Link>
  );
}

export default Workcard;
