import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div
        className="py-12 text-center"
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
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
          <div className="sm:hidden lg:block lg:max-w-xl">
            <img
              src="/img3.jpg"
              className="rounded-lg"
              alt="about page image"
              // width={500}
              // height={500}
            />
          </div>
          <div className="mt-6 gap-12 sm:mt-0 md:flex md:flex-col lg:block">
            <div className="max-w-2xl">
              <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Tigertastic: Discover the Joy of Learning
              </h3>
              <p className="mt-3 max-w-xl">
                At Tigertastic Family Daycare, we take pride in creating a
                nurturing and stimulating environment that fosters the growth
                and development of every child. Our dedicated and experienced
                staff are committed to providing individualized attention and
                tailored learning experiences to meet the unique needs of each
                child.
              </p>
              <p className="mt-3 max-w-xl">
                Choose Tigertastic for your child&apos;s growth. Providing and
                caring for your child can be difficult. TigerTastic Daycare is
                here to make it easier. We are proud to offer before
                school/afterschool daycare so that you know your child is in
                good hands and has viable transportation to get to school safely
                and on time. We offer a premium afterschool daycare that offers
                them a place where they can finish their homework, socialize
                with friends, and make memories while they wait for you to leave
                work.
              </p>
              <p className="mt-3 max-w-xl">
                We value open communication with families and strive to create a
                home away from home for your little ones. Join the Tigertastic
                family today!!
              </p>
            </div>
            <div className="flex-none mt-6 md:mt-0 lg:mt-6">
              {/* Highlights */}
              <div className="mt-8">
                <h4 className="text-gray-800 text-2xl font-semibold mb-4">
                  Highlights
                </h4>
                <ul className="list-disc max-w-xl pl-5">
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
                  Monday - Friday: 7:00 AM - 6:00 PM
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
                    href="/application.pdf"
                    target="_blank"
                    className="mt-6 text-blue-600 hover:underline  "
                  >
                    Enrollment Application (PDF)
                  </a>
                  <a
                    href="/childcareAgreement.pdf"
                    target="_blank"
                    className="mt-4 text-blue-600 hover:underline "
                  >
                    Childcare Agreement (PDF)
                  </a>
                  <a
                    href="/immunization.pdf"
                    target="_blank"
                    className="mt-4 text-blue-600 hover:underline "
                  >
                    Immunization (PDF)
                  </a>
                  <a
                    href="/application.pdf"
                    target="_blank"
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
