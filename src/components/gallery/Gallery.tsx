import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="custom-screen text-gray-600 gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className="max-w-3xl xl:mx-auto xl:text-center">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Our gallery
        </h3>
      </div>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 mt-12">
        <div>
          <img src="/img1.jpg" alt="" loading="lazy" />
        </div>
        <div className="col-start-3">
          <img src="/img2.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <img src="/img3.jpg" alt="" loading="lazy" />
        </div>
        <div>
          <img src="/img4.jpg" alt="" loading="lazy" />
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          <img src="/img5.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
