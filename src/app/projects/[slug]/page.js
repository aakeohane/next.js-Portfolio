'use client'
import ProjectDetails from "@/components/project-details";
import React, { useState } from 'react';


const ProjectModal = ({ params: { slug } }) => {
   const [isParRoute, setIsParRoute] = useState(null);

  const parRoute = () => setIsParRoute(true);
  return (
    <div className="parallel-route">
      <ProjectDetails slug={slug} parRoute={parRoute} />
    </div>
  );
};

export default ProjectModal;