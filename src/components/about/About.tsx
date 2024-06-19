"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: -20,
          },

          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
      ></motion.div>

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 20,
          },

          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_right md:w-1/2"
      ></motion.div> */}
      <section className="lg:py-28 md:py-20 pt-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
          <div className="flex lg:flex-row-reverse gap-x-12 flex-col">
            <div className="flex flex-col lg:flex-row lg:mt-0 ">
              <div className="max-w-2xl">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  We provide the best chilcare for your little ones
                </h3>
                <p className="mt-3 max-w-xl">
                  Welcome to TigerTastic Daycare, where every day is a new
                  adventure in learning and growing! When it comes to finding
                  what&apos;s best for your child, look no further than
                  TigerTastic Daycare. Dedicated to providing a fun and safe
                  space for your child to play and grow and socialize, we are
                  here to be a part of the village that raises your child.
                  We are located in Seattle, WA
                </p>
                <p className="mt-3 max-w-xl">
                  TigerTastic Daycare is proud to offer full-time & part-time daycare that
                  allows your child to be cared for by highly trained and
                  trusted individuals with their best interests at heart. To
                  enroll your child in our home family daycare, contact
                  TigerTastic Daycare today!
                </p>
                <div className="mt-5">
                  <Link href="/about" className=" btn-primary">
                    {" "}
                    Learn more{" "}
                  </Link>
                </div>
              </div>
              <div className="flex-none mt-6 lg:mt-0"></div>
            </div>
            <div className="lg:block lg:max-w-xl lg:mt-0 mt-6 flex  w-full h-96 lg:w-full">
              <img
                src="/img3.jpg"
                className="object-cover md:w-full md:h-full md:max-w-2xl rounded-md"
                alt="about-image"
                // width={500}
                // height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
