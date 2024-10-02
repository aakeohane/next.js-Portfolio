'use client'
import { bebasNeueFontClass } from "@/app/layout"
import Workcard from "../workcard"
import styles from './work.module.css'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef, useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Work = (props) => {

  const [size, setSize] = useState({ width: 0, height: 0 });
  const projectRefs = useRef([]);

  useEffect(() => {
    if (projectRefs.current) {
      projectRefs.current.forEach((project) => {
        const { width, height } = project.getBoundingClientRect();
        setSize({ width, height });
        project.style.height = height
      })
      
    }
  }, []);



  const projectRef = (project) => {
    if (project && !projectRefs.current.includes(project)) {
      projectRefs.current.push(project);
    }
  };


    useGSAP(() => {

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh()
      projectRefs.current.forEach((project) => {
        gsap.set(project, {opacity: 0}, )
        gsap.to(project, {
          opacity: 1,
          scrollTrigger: {
            trigger: project,
            start: 'top center',
            end: 'bottom top',
            scrub: true,
            markers: true,
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