import { bebasNeueFontClass } from "@/app/layout"
import Workcard from "../workcard"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Work = (props) => {
  const projectRefs = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  const projectRef = (project) => {
    if (project && !projectRefs.current.includes(project)) {
      projectRefs.current.push(project);
    }
  };




    useGSAP(() => {

      // function setOffScreen( project ){
      //   const dimension = project.getBoundingClientRect();
      //   let distance = props.windowWidth + dimension.offsetWidth/2;
      //   console.log(dimension)
      //   return distance

      // }

      projectRefs.current.forEach((project) => {
        gsap.set(project, {opacity: 0})
        gsap.to(project, {
          opacity: 1,
          scrollTrigger: {
            trigger: project,
            start: 'top bottom 20px',
            end: 'bottom top',
            scrub: true,
            // markers: true,
          },
        });
      });

      
  }, [])
    
  
  return (
    <section id="work" data-section>
      <h1>
        Here is my amazing portfolio of werk!
      </h1>
      <p className={`${bebasNeueFontClass}`}></p>
      <div style={{padding: 0}}>
          {props.allWerkData.map(({ image, title, slug, description, order }) => {
          return (
            <Workcard 
              key={slug} 
              windowWidth={props.windowWidth}
              ref={projectRef}
              description={description} 
              image={image} 
              title={title} 
              slug={slug} 
              order={order}
            />
          )
})}
        </div>
    </section>
  )
}

export default Work