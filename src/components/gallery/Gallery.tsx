import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="custom-screen text-gray-600 gap-20 py-14 pb-14 md:gap-28 lg:py-28">
      <div className="max-w-3xl mx-auto sm:text-center md:mx-auto">
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Our gallery
        </h3>
      </div>
      <div className="max-w-7xl mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <Image
          src="/img5.jpg"
          className="rounded-lg"
          alt="Gallery Image 1"
          width={500}
          height={500}
        />
        <Image
          src="/img5.jpg"
          className="rounded-lg"
          alt="Gallery Image 2"
          width={500}
          height={500}
        />
        <Image
          src="/img5.jpg"
          className="rounded-lg"
          alt="Gallery Image 3"
          width={500}
          height={500}
        />
        <Image
          src="/img5.jpg"
          className="rounded-lg"
          alt="Gallery Image 4"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Gallery;
