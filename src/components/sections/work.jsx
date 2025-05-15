'use client'
import { bebasNeueFontClass } from "@/app/layout"
import Workcard from "../workcard"

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Work = (props) => {
  const projectRefs = useRef([]);
  gsap.registerPlugin(ScrollTrigger);

  // takes each project as it is rendered and put the DOM ref object into an array
  const projectRef = (project) => {
    if (project && !projectRefs.current.includes(project)) {
      projectRefs.current.push(project);
    }
  };

  // takes the above array and sets each project with animation on viewport entry (scrollTrigger)
  // useGSAP(() => {
  //   projectRefs.current.forEach((project) => {
  //     gsap.set( project , {y: 100, autoAlpha: 0 } );
  //     gsap.to(project, {
  //       scrollTrigger: {
  //         trigger: project,
  //         start: 'top 90%',
  //         end: 'top 60%',
  //         scrub: 1,
  //         preventOverlaps: true,
  //       },
  //       y: 0,
  //       autoAlpha: 1,
  //     })
  //   });
  // }, [])
    
  
  return (
    <section id="work" data-section>
      <h1>
        My Projects
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