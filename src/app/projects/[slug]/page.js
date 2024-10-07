import ProjectDetails from "@/components/project-details";


const ProjectModal = ({ params: { slug } }, modal) => {
  
  return (
    <div className="parallel-route">
      <ProjectDetails slug={slug} modal={modal} />
    </div>
  );
};

export default ProjectModal;