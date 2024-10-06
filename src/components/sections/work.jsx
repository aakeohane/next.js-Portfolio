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

  const projectRef = (project) => {
    if (project && !projectRefs.current.includes(project)) {
      projectRefs.current.push(project);
    }
  };

    useGSAP(() => {
      projectRefs.current.forEach((project) => {
        gsap.set( project , {y: 100, autoAlpha: 0 } );
        gsap.to(project, {
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
            markers: true,
            preventOverlaps: true,
          },
          y: 0,
          autoAlpha: 1,
          duration: 0.1
        })
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