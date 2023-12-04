import { bebasNeueFontClass } from "@/pages/_app"
import Workcard from "../workcard"

const Work = (props) => {
  
  return (
    <section id="work" data-section>
      <h1>
        Here is my amazing portfolio of werkkkk!
      </h1>
      <p className={`${bebasNeueFontClass}`}></p>
      <div style={{padding: 0}}>
          {props.allWerkData.map(({ image, title, slug }) => (
            <Workcard key={slug} image={image} title={title} slug={slug} />
          )
          )}
        </div>
    </section>
  )
}

export default Work