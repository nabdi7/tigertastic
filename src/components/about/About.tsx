import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="lg:py-28 md:py-20 pt-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="flex lg:flex-row-reverse gap-x-12 flex-col">
          <div className="flex flex-col lg:flex-row lg:mt-0 ">
            <div className="max-w-2xl">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                We provide the best chilcare for your little ones
              </h3>
              <p className="mt-3 max-w-xl">
                Welcome to Tigertastic Family Daycare, where every day is a
                new adventure in learning and growing! We provide a warm,
                nurturing, and stimulating environment tailored to each
                child&apos;s unique needs. Our dedicated and experienced staff
                focus on play-based learning to foster creativity, social
                skills, and a love of learning.
              </p>
              <p className="mt-3 max-w-xl">
                At Tigertastic, safety and individualized attention are our top
                priorities. We offer a variety of programs, including arts and
                crafts, story time, outdoor play, music, and STEM activities,
                all designed to support your child&apos;s development. We value
                open communication with families and strive to create a home
                away from home for your little ones.
              </p>
              <div className="mt-5">
                <Link
                  href="/about"
                  className=" btn-primary"
                >
                  {" "}
                  Learn more{" "}
                </Link>
              </div>
            </div>
            <div className="flex-none mt-6 lg:mt-0"></div>
          </div>
          <div className="lg:block lg:max-w-xl lg:mt-0 mt-6 flex  w-full h-96 lg:w-full">
            <Image
              src="/img3.jpg"
              className="object-cover md:w-full md:h-full md:max-w-2xl rounded-md"
              alt="about-image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
