import  ProjectDetails from "@/components/project-details";
import  Modal from "@/components/custom-modal";


const ProjectModal = ({ params: { slug } }) => {
  
  return (
    <div className="static">
      <Modal>
        <ProjectDetails slug={slug} />
      </Modal>
    </div>
  );
};

export default ProjectModal;