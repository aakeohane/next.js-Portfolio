'use client'
import  ProjectDetails from "@/components/project-details";
import  CustomModal from "@/components/custom-modal";
import { isMobile, isSafari } from "react-device-detect";
import ModalSafariWrapper from "@/app/wrapper/modal-safari-wrapper";
import { useEffect, useState } from "react";


const ProjectModal = ({ params: { slug} }) => {

  const [isSafariMobile, setisSafariMobile] = useState(false)

  useEffect(() => {
    const safariMobile = isMobile && isSafari
    if (safariMobile) {
      setisSafariMobile(true)
    }
  })
  
  return (
      <div className="modal">
        {!isSafariMobile ?
        <CustomModal>
          <ProjectDetails slug={slug} />
        </CustomModal>
        : 
        <ModalSafariWrapper>
          <CustomModal>
            <ProjectDetails slug={slug} />
          </CustomModal>
        </ModalSafariWrapper>
        }
      </div>
  );
};

export default ProjectModal;