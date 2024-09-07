import Image from "next/image"

const { getWork } = require("@/lib/werk")

const ProjectDetails = ({slug}) => {
  const werk = getWork(slug)
  return (
    <div>
      {werk.description}
      <Image
          alt="example" 
          src={werk.image}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            margin: '15px 0 15px 0'
          }}
          width={300}
          height={100}
        />
        <Image
          alt="example" 
          src={werk.image}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            margin: '15px 0 15px 0'
          }}
          width={300}
          height={100}
        />
    </div>
  )
}

export default ProjectDetails