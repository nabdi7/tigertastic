import React from "react";

const Cta = () => {
  return (
    <section
      className="py-28 relative  my-16 sm:py-32"
      style={{
        backgroundImage: `url('/cta.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="custom-screen relative z-10 max-w-screen-xl mx-auto  md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Register your child now!
          </p>
          <p className="text-blue-100 mt-3">
            We provide a safe, nurturing, and educational environment for
            children.
          </p>
        </div>
        <div className="mt-4">
          <a
            href="javascript:void(0)"
            className="inline-block py-2 px-4 text-gray-800 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-full"
          >
            Contact us
          </a>
        </div>
      </div>
      {/* <div
        className="absolute top-0 w-full h-full"
        style={{
          background:
            "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
        }}
      ></div> */}
    </section>
  );
};

export default Cta;
