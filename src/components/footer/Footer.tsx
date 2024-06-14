import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="custom-screen">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* <div className="mb-6 text-sm font-semibold text-gray-900 ">
            <Link href="/" className="flex-center cursor-pointer uppercase">
              {" "}
              Tigertastic{" "}
            </Link>
            <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">
              Lorem ipsum dolor sit amet consectetur consequatur{" "}
            </p>
          </div> */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Quick Links
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Programs
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Phone: +1 234 567 890
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Email: tigertastic.daycare@gmail.com
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Address: 1234 Seattle, WA
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Hours of operation
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Mon - Fri: 6:00 AM - 12:00 AM
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Sat - Sun: 6:00 AM - 6:00 PM
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Parental info
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Enrollment Application
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Parent Handbook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm py-4">
        &copy;{new Date().getFullYear()} TigerTastic Family Daycare | All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
