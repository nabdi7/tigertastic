import React from "react";
import Image from "next/image";

const Programs = () => {
  return (
    <>
      <div
        className="py-8 text-center"
        style={{
          backgroundImage: `url('/cta.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 sm:text-3xl mb-10">
          Our Programs
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-5 mt-2"></div>
        </h2>
      </div>
      <section className="custom-screen pt-14">
        {/* infant */}
        <div className="relative w-full max-w-5xl mb-8 pb-10 lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 md:w-1/2 md:mb-0">
            <img
              src="/img5.jpg"
              // width={500}
              // height={500}
              alt="Programs Image"
              className="rounded-lg"
            />
          </div>
          {/* Card content */}
          <div className="w-full lg:w-1/2 lg:pl-0 md:w-1/2 md:pl-10">
            <div className="bg-white p-6 rounded-lg shadow-lg lg:w-11/12 md:w-12/12 lg:-ml-36 md:-ml-36">
              <h3 className="text-xl font-semibold text-gray-800">
                Infant Care Services
              </h3>
              <p className="mt-4 text-gray-600">
                Our infant care services provide a safe, nurturing environment
                for newborns and infants up to 12 months. Our attentive
                staff ensure your little one receives responsive care,
                engaging playtime, and a clean, comfortable space for napping
                and feeding.
              </p>
            </div>
          </div>
        </div>

        {/* toddler */}
        <div className="relative w-full max-w-5xl mb-8 pb-10 lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:order-2 md:order-2 md:w-1/2 md:mb-0">
            <img
              src="/img5.jpg"
              // width={500}
              // height={500}
              alt="Programs Image"
              className="rounded-lg"
            />
          </div>
          {/* Card content */}
          <div className="w-full lg:w-1/2 z-30 lg:pr-0 md:w-1/2 md:pr-10">
            <div className="bg-white p-6 rounded-lg shadow-lg lg:w-11/12 md:w-12/12 lg:ml-36 md:-mr-36">
              <h3 className="text-xl font-semibold text-gray-800">
                Toddler Care Services
              </h3>
              <p className="mt-4 text-gray-600">
                We offer reliable childcare for toddlers aged 1 to 3 years. Our
                experienced staff create a fun and stimulating environment
                with age-appropriate activities, playtime, and opportunities for
                social interaction, while ensuring your child&apos;s safety and
                well-being.
              </p>
            </div>
          </div>
        </div>

        {/* preschool */}
        <div className="relative w-full max-w-5xl mb-8 lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 md:w-1/2 md:mb-0">
            <img
              src="/img5.jpg"
              // width={500}
              // height={500}
              alt="Programs Image"
              className="rounded-lg"
            />
          </div>
          {/* Card content */}
          <div className="w-full lg:w-1/2 lg:pl-0 md:w-1/2 md:pl-10">
            <div className="bg-white p-6 rounded-lg shadow-lg lg:w-11/12 md:w-12/12 lg:-ml-36 md:-ml-36 md:-mt-0 ">
              <h3 className="text-xl font-semibold text-gray-800">
                Preschool-Age Childcare
              </h3>
              <p className="mt-4 text-gray-600">
                For children aged 3 to 5 years, we provide childcare services in
                a warm and engaging setting. Our staff supervise playtime,
                arts and crafts, and other activities to keep your child
                entertained and occupied while in our care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
