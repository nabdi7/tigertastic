import React from "react";
import Image from "next/image";

const About = () => {
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
          About Us
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-5 mt-2"></div>
        </h2>
      </div>
      <section className="pt-10">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
          <div className="sm:hidden lg:block lg:max-w-xl">
            <Image
              src="/img3.jpg"
              className="rounded-lg"
              alt="about page image"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-6 gap-12 sm:mt-0 md:flex md:flex-col lg:block">
            <div className="max-w-2xl">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Welcome to Tigertastic, Where Learning is Fun!
              </h3>
              <p className="mt-3 max-w-xl">
                Welcome to Tigertastic Family Childcare, where every day is a
                new adventure in learning and growing! We provide a warm,
                nurturing, and stimulating environment tailored to each childs
                unique needs. Our dedicated and experienced staff focus on
                play-based learning to foster creativity, social skills, and a
                love of learning.
              </p>
              <p className="mt-3 max-w-xl">
                At Tigertastic, safety and individualized attention are our top
                priorities. We offer a variety of programs, including arts and
                crafts, story time, outdoor play, music, and STEM activities,
                all designed to support your childs development. We value open
                communication with families and strive to create a home away
                from home for your little ones.
              </p>
              <p className="mt-3 max-w-xl">
                We value open communication with families and strive to create a
                home away from home for your little ones.
              </p>
            </div>
            <div className="flex-none mt-6 md:mt-0 lg:mt-6">
              {/* Highlights */}
              <div className="mt-8">
                <h4 className="text-gray-800 text-2xl font-semibold mb-4">
                  Highlights
                </h4>
                <ul className="list-disc max-w-xl space-x-4">
                  <li>Play-based learning environment</li>
                  <li>Customized programs for each child</li>
                  <li>Focus on creativity and social skills</li>
                  <li>Safe and nurturing atmosphere</li>
                </ul>
              </div>
              {/* Hours of Operation */}
              <div className="mt-8">
                <h4 className="text-gray-800 text-2xl font-semibold mb-4">
                  Hours of Operation
                </h4>
                <p className="max-w-xl">
                  Monday - Friday: 6:00 AM - 12:00 PM
                  <br />
                  Saturday - Sunday: 6:00 AM - 6:00 PM
                </p>
              </div>
              {/* Application and Parent Handbook */}
              <div className="mt-8">
                <h4 className="text-gray-800 text-2xl font-semibold mb-4">
                  Our documents and forms
                </h4>
                <p className="max-w-xl">
                  For information on enrollment, our parent handbook, and
                  policies, please check below.
                </p>
                <div className="flex flex-col">
                  <a
                    href="tel:+12064467203"
                    className="mt-6 text-blue-600 hover:underline  "
                  >
                    Enrollment Application (PDF)
                  </a>
                  <a
                    href="tel:+12064467203"
                    className="mt-4 text-blue-600 hover:underline "
                  >
                    Registration Form (PDF)
                  </a>
                  <a
                    href="tel:+12064467203"
                    className="mt-4 text-blue-600 hover:underline "
                  >
                    Immunization (PDF)
                  </a>
                  <a
                    href="tel:+12064467203"
                    className="mt-4 text-blue-600 hover:underline "
                  >
                    Parent/Guardian Permission (PDF)
                  </a>
                  <a
                    href="tel:+12064467203"
                    className="mt-4 text-blue-600 hover:underline "
                  >
                    Parent Handbook (PDF)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
