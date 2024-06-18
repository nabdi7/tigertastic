import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-3 bg-[#fbf8f2]" >
      <div className="container custom-screen flex flex-col px-6 py-4 mx-auto space-y-6 lg:space-x-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="">
            <h1 className="text-4xl font-semibold tracking-wide lg:leading-tight leading-tight text-gray-800 lg:text-6xl"> 
              Welcome To{" "}
              <span className="text-transparent bg-clip-text bg-[#1d80e3ff]">
                Tigertastic Family
              </span>{" "}
              Daycare
            </h1>
            <p className="mt-4 text-gray-600 ">
              Your destination for quality and premium child care! Located in
              Seattle, WA. TigerTastic Daycare is a family owned daycare that is
              committed to developing the individuality of each of our students.
            </p>
            <div className="mt-6 space-x-3 lg:pb-0 pb-5">
              <Link href='/contact' className="btn-primary"> Enroll Your Kid </Link>
              <a href="tel:+12064467203" className="btn-secondary">
                (206) 446-7203
              </a>            
            </div>
          </div>
        </div>

        <div className="flex w-full h-96 lg:w-1/2">
          <img
            src="/img5.jpg"
            alt="hero"
            // width={500}
            // height={500}
            className="object-cover w-full h-full max-w-2xl rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
