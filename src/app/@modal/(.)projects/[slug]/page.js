import  ProjectDetails from "@/components/project-details";
import  CustomModal from "@/components/custom-modal";


const ProjectModal = ({ params: { slug} }, modal) => {
  
  return (
    <div className="modal">
      <CustomModal modal={modal}>
        <ProjectDetails slug={slug} modal={modal} />
      </CustomModal>
    </div>
  );
};

export default ProjectModal;