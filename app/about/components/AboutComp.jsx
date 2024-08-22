import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import About from "../../markdown/about.mdx"
import { Merriweather } from "next/font/google";

const mw = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});

export default function AboutComp() {
    const router = useRouter();

    
    
  return (
    <>
    <Image
      src={"/left-arrow.svg"}
      className="top-6 lg:top-16 left-8 lg:left-28 relative cursor-pointer hover:scale-110 duration-300"
      alt=""
      onClick={() => window.location.href="/"}
      width={32}
      height={32}
    />
    <div className={`${mw.className} pt-8 pl-8 pr-8 lg:p-28 mb-96 tracking-wide text-lg lg:text-lg max-w-screen text-orange-50`}>
      <About />
    </div>
    </>    
  )
}
