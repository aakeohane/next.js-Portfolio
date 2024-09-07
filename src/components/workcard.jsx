import Link from "next/link";
import Image from "next/image"

function Workcard({order, title, image, slug}) {
  return (
    <div key={order}>
      <h3>{title}</h3>
      <Link 
        key={slug}
        href={`projects/${slug}`}
        // as={`/work/${slug}`}
        scroll={false}
        shallow={true}>
        <Image
          alt="example" 
          src={image}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            margin: '15px 0 15px 0'
          }}
          width={300}
          height={100}
        />
      </Link>
    </div>
  );
}

export default Workcard;
