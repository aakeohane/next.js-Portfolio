import { bebasNeueFontClass } from "@/pages/_app"
import Image from "next/image"

const Work = (props) => {

  console.log(props.allWerkData)
  
  return (
    <section id="work" data-section>
      <h1>
        Here is my amazing portfolio of werkkkk!
      </h1>
      <p className={`${bebasNeueFontClass}`}></p>
      <div>
          {props.allWerkData.map(({ id, title, image }) => (
            <div key={id}>
              {title}
              <Image
                alt="example" 
                src={image}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                width={300}
                height={100}
              />
            </div>
          ))}
        </div>
    </section>
  )
}

export default Work