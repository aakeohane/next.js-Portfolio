import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useRef } from "react";

export function Modal({ onClose = () => {}, workData }) {
  let overlayRef = useRef();

  return (
      <Dialog
        static
        open={true}
        onClose={onClose}
        initialFocus={overlayRef}
        className="fixed inset-0 z-10 flex items-center justify-center"
      >
        <Image
            alt="example" 
            src={workData.image}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
              margin: '-3px 0 -3px 0'
            }}
            width={300}
            height={100}
          />
        <div className="relative flex items-center justify-center w-1/2"
        dangerouslySetInnerHTML={{ __html: workData.contentHtml }}>
        </div>
      </Dialog>
  );
}