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
      <div style={{padding: 0}}>
          {props.allWerkData.map(({ id, image }) => (
            <div key={id}>
              <Image
                alt="example" 
                src={image}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                  margin: '-2px 0 -2px 0'
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