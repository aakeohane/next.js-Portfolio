'use client'

import { ModalContext } from "@/app/context/provider";
import Header from "@/components/header";
import ProjectDetails from "@/components/project-details";
import React, { useEffect, useContext } from 'react';


const ProjectModal = ({ params: { slug } }) => {
  // these two lines of logic are only to set Par route for project details info like a footer

  const { isParRoute, parRoute} = useContext(ModalContext)

  useEffect(() => {
    parRoute()
    }, [])

  return (
    <div className="parallel-route">
      {isParRoute && <Header></Header>}
      <ProjectDetails slug={slug} parRoute={isParRoute} />
    </div>
  );
};

export default ProjectModal;