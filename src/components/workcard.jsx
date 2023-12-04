import Link from "next/link";
import Image from "next/image"


function Workcard(props) {
  return (
    <div key={props.index}>
      
      <h2>{props.title}</h2>
      <Link href={`work/?=${props.slug}`}>
        <Image
          alt="example" 
          src={props.image}
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
