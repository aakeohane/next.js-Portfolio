import ProjectDetails from "@/components/project-details";


const ProjectModal = ({ params: { slug } }) => {
  
  return (
    <div className="parallel-route">
      <ProjectDetails slug={slug} />
    </div>
  );
};

export default ProjectModal;