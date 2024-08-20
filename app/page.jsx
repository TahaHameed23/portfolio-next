"use client"
import { PT_Serif } from "next/font/google";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import "./globals.css";

const pt_serif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});


export default function Home() {
  return (
    <>
      <div className="bg-[#fe542e] h-2"></div>
        {/* <Navbar /> */}
        <div className="mx-16 lg:mx-28 my-16 lg:my-20 text-2xl">
          <span  className="text-xl lg:text-2xl"> Hey, I'm </span>
          <div className={` ${pt_serif.className} text-3xl lg:text-4xl font-semibold py-2`}>
            Taha Hameed
            <div className="text-sm lg:text-lg font-normal">Software engineer</div>
          </div>
        </div>
        <div className="about">
        <Summary />
        </div>
    </>
  );
}
