import { useRouter } from 'next/router';
import { getAllWorkSlugs, getWorkData} from "lib/work";

import { useEffect } from 'react';
import { CustomModal } from '@/components/custom-modal';

export default function WerkProjects({ workData }) {
  
  const router = useRouter();


  console.log(workData.slug)

  useEffect(() => {
    router.prefetch('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    
    <div className="relative w-screen h-screen bg-gray-800">
      <CustomModal
        isOpen={true} // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => {router.push(`/#${workData.slug}`)}}
        contentLabel="Work Modal"
      >
      </CustomModal>
    </div>
  );
}



export async function getStaticPaths() {
  const paths = getAllWorkSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const workData = await getWorkData(params.slug);
  return {
    props: {
      workData,
    },
  };
}

