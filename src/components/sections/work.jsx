import { bebasNeueFontClass } from "@/app/layout"
import Workcard from "../workcard"

const Work = (props) => {
  return (
    <section id="work" data-section>
      <h1>
        Here is my amazing portfolio of werk!
      </h1>
      <p className={`${bebasNeueFontClass}`}></p>
      <div style={{padding: 0}}>
          {props.allWerkData.map(({ image, title, slug, description, order }) => (
            <Workcard windowWidth={props.windowWidth} key={slug} description={description} image={image} title={title} slug={slug} order={order} />
          )
          )}
        </div>
    </section>
  )
}

export default Work