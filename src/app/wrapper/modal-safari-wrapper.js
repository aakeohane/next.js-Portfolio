import { usePreventScroll } from "@react-aria/overlays";

const ModalSafariWrapper = ( { children } ) => {


  // nifty aria trick to actually remove body scroll when using phone on safari, EVERYTHING else does not work
  usePreventScroll()

  return (
      <>
        {children}
      </>
  );
}
export default ModalSafariWrapper