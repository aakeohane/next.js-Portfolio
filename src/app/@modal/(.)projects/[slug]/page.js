import  ProjectDetails from "@/components/project-details";
import  CustomModal from "@/components/custom-modal";


const ProjectModal = ({ params: { slug } }) => {
  
  return (
    <div className="static">
      <CustomModal>
        <ProjectDetails slug={slug} />
      </CustomModal>
    </div>
  );
};

export default ProjectModal;