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
      <section className="custom-screen pt-10">
        {/* infant */}
        <div className="relative w-full max-w-5xl mb-8 lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 md:w-1/2 md:mb-0">
            <Image
              src="/img5.jpg"
              width={500}
              height={500}
              alt="Programs Image"
              className="rounded-lg"
            />
          </div>
          {/* Card content */}
          <div className="w-full lg:w-1/2 lg:pl-0 md:w-1/2 md:pl-10">
            <div className="bg-white p-6 rounded-lg shadow-lg lg:w-11/12 md:w-12/12 lg:-ml-36 md:-ml-36">
              <h3 className="text-xl font-semibold text-gray-800">
                Infant Programs Developed by our Educational Child Care Experts
              </h3>
              <p className="mt-4 text-gray-600">
                Our infant program supports newborns and infants up to 12 months
                through a nurturing environment, sensory exploration, responsive
                care, and activities fostering cognitive development,
                understanding of their environment, and expression of wants and
                needs.
              </p>
            </div>
          </div>
        </div>

        {/* toddler */}
        <div className="relative w-full max-w-5xl mb-8 lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 lg:order-2 md:order-2 md:w-1/2 md:mb-0">
            <Image
              src="/img5.jpg"
              width={500}
              height={500}
              alt="Programs Image"
              className="rounded-lg"
            />
          </div>
          {/* Card content */}
          <div className="w-full lg:w-1/2 z-30 lg:pr-0 md:w-1/2 md:pr-10">
            <div className="bg-white p-6 rounded-lg shadow-lg lg:w-11/12 md:w-12/12 lg:ml-36 md:-mr-36">
              <h3 className="text-xl font-semibold text-gray-800">
                Toddler Programs Developed by our Educational Child Care Experts
              </h3>
              <p className="mt-4 text-gray-600">
                Our toddler program supports children aged 1 to 3 years through
                a nurturing environment, engaging activities fostering
                cognitive, social, and emotional development, building language
                and communication skills, promoting independence, and
                encouraging exploration through play-based learning.
              </p>
            </div>
          </div>
        </div>

        {/* preschool */}
        <div className="relative w-full max-w-5xl mb-8 lg:flex lg:items-center lg:justify-between md:flex md:items-center md:justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 md:w-1/2 md:mb-0">
            <Image
              src="/img5.jpg"
              width={500}
              height={500}
              alt="Programs Image"
              className="rounded-lg"
            />
          </div>
          {/* Card content */}
          <div className="w-full lg:w-1/2 lg:pl-0 md:w-1/2 md:pl-10">
            <div className="bg-white p-6 rounded-lg shadow-lg lg:w-11/12 md:w-12/12 lg:-ml-36 md:-ml-36">
              <h3 className="text-xl font-semibold text-gray-800">
                Preschool Programs Developed by our Educational Child Care
                Experts
              </h3>
              <p className="mt-4 text-gray-600">
                Our preschool supports children aged 3 to 5 years with a focus
                on preparing children for school readiness. Through interactive
                learning experiences and play-based curriculum, we ensure each
                child receives a solid foundation in literacy, numeracy, and
                social skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
