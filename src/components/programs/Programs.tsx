import React from "react";
import Image from "next/image";

const Programs = () => {
  return (
    <>
      <div className="py-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 sm:text-3xl mb-10">
          Programs
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-5 mt-2"></div>
        </h2>
      </div>
      <section className="custom-screen">
        <div className="relative w-full max-w-5xl mb-8">
          <div className="absolute inset-0 flex justify-end">
            <div className="w-1/2 h-full flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 -ml-36">
                <h3 className="text-xl font-semibold text-gray-800">
                  Programs Developed by our Educational Child Care Experts
                </h3>
                <p className="mt-4 text-gray-600">
                  Our Early Childhood Education Team and the Life Essentials
                  Curriculum Advisory Council evaluate and update our programs
                  continuously to ensure every child gets the most effective
                  educational experience.
                </p>
                <button className="mt-6 py-2 px-4 bg-yellow-500 text-white rounded-md">
                  MEET OUR TEAM
                </button>
              </div>
            </div>
          </div>
          <Image
            src="/img5.jpg"
            width={500}
            height={500}
            alt="Programs Image"
            className="rounded-lg"
          />
        </div>

        <div className="relative w-full max-w-5xl mb-8">
          <div className="flex justify-end">
            <Image
              src="/img5.jpg"
              width={500}
              height={500}
              alt="Programs Image"
              className="rounded-lg"
            />
          </div>
          <div className="absolute inset-0 flex justify-start">
            <div className="w-1/2 h-full flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 -mr-36">
                <h3 className="text-xl font-semibold text-gray-800">
                  Programs Developed by our Educational Child Care Experts
                </h3>
                <p className="mt-4 text-gray-600">
                  Our Early Childhood Education Team and the Life Essentials
                  Curriculum Advisory Council evaluate and update our programs
                  continuously to ensure every child gets the most effective
                  educational experience.
                </p>
                <button className="mt-6 py-2 px-4 bg-yellow-500 text-white rounded-md">
                  MEET OUR TEAM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
