import { Modal } from "@/components/modal";
import { getAllWorkSlugs, getWorkData} from "lib/work";


export default function WerkProjects(workData) {
  
  
  return (
  <Modal workData={workData} />
  
  )
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
      ...workData,
    },
  };
}

