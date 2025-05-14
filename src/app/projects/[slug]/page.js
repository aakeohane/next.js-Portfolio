'use client'
import ProjectDetails from "@/components/project-details";
import React, { useState } from 'react';


const ProjectModal = ({ params: { slug } }) => {
  // these two lines of logic are only to set Par route for project details info like a footer
  const [isParRoute, setIsParRoute] = useState(null);
  const parRoute = () => setIsParRoute(true);
  return (
    <div className="parallel-route">
      <ProjectDetails slug={slug} parRoute={parRoute} />
    </div>
  );
};

export default ProjectModal;