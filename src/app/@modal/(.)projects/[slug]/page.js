'use client'
import  ProjectDetails from "@/components/project-details";
import  CustomModal from "@/components/custom-modal";
import { isMobile, isSafari } from "react-device-detect";
import CustomModalSafariWrapper from "@/components/custom-modal-safari";
import { useEffect, useState } from "react";


const ProjectModal = ({ params: { slug} }) => {

  const [isSafariMobile, setisSafariMobile] = useState(false)

  useEffect(() => {
    const safariMobile = isMobile && isSafari
    if (safariMobile) {
      setisSafariMobile(true)
      console.log("safari is mobile")
    }
  })
  
  return (
      <div className="modal">
        {!isSafariMobile ?
        <CustomModal>
          <ProjectDetails slug={slug} />
        </CustomModal>
        : 
        <CustomModalSafariWrapper>
          <CustomModal>
            <ProjectDetails slug={slug} />
          </CustomModal>
        </CustomModalSafariWrapper>
        }
      </div>
  );
};

export default ProjectModal;