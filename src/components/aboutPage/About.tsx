import React from "react";

const About = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <img
            src="/img3.jpg"
            className="rounded-lg"
            alt=""
          />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              We do our best to make customers always happy
            </h3>
            <p className="mt-3 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
              eu turpis egestas pretium aenean pharetra. Pellentesque elit
              ullamcorper dignissim cras. Enim sit amet venenatis urna. Enim
              neque volutpat ac tincidunt vitae semper quis. Quis vel eros donec
              ac. Praesent semper feugiat nibh sed pulvinar proin gravida
              hendrerit lectus. Nec tincidunt praesent semper feugiat nibh sed.
              Turpis massa sed elementum tempus egestas sed sed risus. Etiam
              dignissim diam quis enim lobortis scelerisque. Eu consequat ac
              felis donec et. In massa tempor nec feugiat nisl pretium fusce.
              Condimentum mattis pellentesque id nibh tortor id aliquet lectus
              proin. Aliquam malesuada bibendum arcu vitae elementum curabitur
              vitae. Cum sociis natoque penatibus et magnis dis parturient
              montes nascetur. Aliquam vestibulum morbi blandit cursus risus at
              ultrices.
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
