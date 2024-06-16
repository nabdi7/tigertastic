import React from "react";
import Image from "next/image";
const Stats = () => {
  const stats = [
    {
      data: "264+",
      title: "Successful kids",
    },
    {
      data: "7+",
      title: "Years of providing quality care",
    },
    {
      data: "100%",
      title: "Parent satisfaction rate",
    },
    {
      data: "5",
      title: "Qualified staff members",
    },
  ];
  return (
    <section className="lg:py-14 py-14 bg-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <Image
            src="/img5.jpg"
            className="rounded-lg"
            alt="stats image"
            width={700}
            height={500}
          />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              We take pride in our excellence
            </h3>
            <p className="mt-3 max-w-xl">
              Providing quality care for over seven years with a focus on
              nurturing childrens growth and happiness. Join us today!
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx} className="">
                  <h4 className="text-4xl text-[#1d80e3ff] font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
