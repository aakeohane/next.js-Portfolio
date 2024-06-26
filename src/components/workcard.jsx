import Link from "next/link";
import Image from "next/image"

function Workcard({slug, index, title, image}) {
  
  return (
    <div key={index} id={slug}>
      <h3>{title}</h3>
      <Link 
        // href="work/[slug]"
        // href={`work/[slug]?slug=${slug}`}
        href={`/work/?slug=${slug}`}
        as={`/work/${slug}`}
        scroll={false}
        shallow={true}>
        <Image
          alt="example" 
          src={image}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            margin: '-3px 0 -3px 0'
          }}
          width={300}
          height={100}
        />
      </Link>
    </div>
  );
}

export default Workcard;
