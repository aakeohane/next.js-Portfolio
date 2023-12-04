import { bebasNeueFontClass } from "@/pages/_app"
import Workcard from "../workcard"
import { Modal } from "../modal"

const Work = (props) => {
  
  return (
    <section id="work" data-section>
      {/* <Modal /> */}
      <h1>
        Here is my amazing portfolio of werkkkk!
      </h1>
      <p className={`${bebasNeueFontClass}`}></p>
      <div style={{padding: 0}}>
          {props.allWerkData.map(({ index, image, title, slug, contentHtml }) => (
            <Workcard key={slug} image={image} title={title} slug={slug} />
          )
          )}
        </div>
    </section>
  )
}

export default Work