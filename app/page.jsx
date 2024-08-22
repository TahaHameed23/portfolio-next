"use client"
import { PT_Serif } from "next/font/google";
import Navbar from "./components/Navbar";
import Summary from "./components/SummaryComp";
import "./globals.css";

const pt_serif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});


export default function Home() {
  return (
    <>
      <div className="bar h-2 w-full"></div>
        {/* <Navbar /> */}
        <div className="mx-6 lg:mx-28 my-12 lg:my-20 parent">
          <div className={` ${pt_serif.className} text-3xl lg:text-4xl lg:flex md:flex md:items-center lg:items-center font-semibold py-8 div1`}>
            <div  className="text-xl lg:text-xl font-medium">  </div>
              Taha Hameed
              <div className="flex lg:hidden md:hidden lg:text-5xl gap-3 my-1 ">
                <i className="devicon-nodejs-plain-wordmark"></i>
                <i className="devicon-go-original-wordmark"></i>
                <i className="devicon-amazonwebservices-plain-wordmark"></i>
              </div>
            {/* <div className="text-sm lg:text-lg font-normal">Software engineer</div> */}
          </div>

          <div className="hidden div2 text-4xl lg:flex md:flex gap-4 my-2 p-4 -mx-12">
            <i className="devicon-nodejs-plain-wordmark"></i>
            <i className="devicon-go-original-wordmark"></i>
            <i className="devicon-amazonwebservices-plain-wordmark"></i>
          </div>
        </div>
        
        <Summary />
        
    </>
  );
}
