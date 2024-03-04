import { useRouter } from 'next/router';
import { getAllWorkSlugs, getWorkData} from "lib/work";

import { useEffect } from 'react';
import { CustomModal } from '@/components/custom-modal';

import md from 'markdown-it';

import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Work from '@/components/sections/work'
import Contact from '@/components/sections/contact'
import Image from 'next/image';

export default function WerkProjects({ workData }) {
  
  const router = useRouter();
  console.log(workData.image)

  useEffect(() => {
    router.prefetch('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
  <>
      
      <div style={{display: 'flex', flexDirection: 'column', padding: "0 20px 0 20px"}}>
        <CustomModal
        isOpen={true} // The modal should always be shown on page load, it is the 'page'
        onRequestClose={() => router.push(`/#${workData.slug}`)}
        contentLabel="Work Modal"
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
        <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
      </CustomModal>
        {/* <Hero/>
        <About/>
        <Contact/> */}
      </div>
      
  </>
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

