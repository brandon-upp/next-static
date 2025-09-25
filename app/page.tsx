import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      Hello World. <Link href='/about'>About</Link>
      <div>
        <Image
          aria-hidden
          src='/next-static/globe.svg'
          alt='Globe icon'
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
