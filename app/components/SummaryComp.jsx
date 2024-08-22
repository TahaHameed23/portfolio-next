import Link from "next/link";
import Summary from "../markdown/summary.mdx";


export default function SummaryComp() {
  return (
    <div className="w-full px-6 lg:m-auto lg:px-28 lg:py-20 py-16 lg:pt-16 sm:block absolute bottom-0 about">
      <div className="text-slate-400 font-medium my-2">Summary</div>
        <div className="text-lg text-balance text-slate-300 lg:leading-loose mb-2">
        <Summary />
        </div>
        <Link href="/about" className="link">
        Read more
        </Link>
    </div>
  )
}
