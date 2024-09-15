import Link from "next/link";
import Image from "next/image"
import styles from "./workcard.module.css"
import { useState } from "react"

function Workcard({order, title, image, slug}) {

  const [hover, setHover] = useState(false)
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const hoverTitle = {
    opacity: hover ? '1' : '0',
  
  }

  const hoverImage = {
    width: '100%',
    height: 'auto',
  }


  return (
      <Link 
      className={styles["workcard-link"]}
        key={order}
        href={`projects/${slug}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        scroll={false}
        shallow={true}>
        <div className={styles["workcard-content-container"]} >
          <Image
            className={styles["workcard-image"]}
            style={hoverImage}
            alt="example" 
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
