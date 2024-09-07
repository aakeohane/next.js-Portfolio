import  ProjectDetails from "@/components/project-details";


const ProjectModal = ({ params: { slug } }) => {
  
  return (
    <div>
      <ProjectDetails slug={slug} />
    </div>
  );
};

export default ProjectModal;