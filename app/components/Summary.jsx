import Link from "next/link";
import About from "../markdown/about.mdx";

export default function Summary() {
  return (
    <div className="w-full px-16 lg:px-28 pt-6 pb-56 leading-loose text-slate-300">
      <div className="text-slate-400 font-medium my-2">Summary</div>
        <About/>
        <Link href="/about" className="underline hover:text-[#FF5733] duration-300">
        Read more
        </Link>
    </div>
  )
}
