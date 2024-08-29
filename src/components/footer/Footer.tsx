import React from "react";
import Link from "next/link";
import { contactMethods } from "./index";

const Footer = () => {
  return (
    <footer className="pb-10 pt-10 bg-gray-100">
      <div className="custom-screen mx-auto w-full max-w-screen-xl ">
        <div className="grid grid-cols-1 gap-8  py-6 lg:py-8 lg:grid-cols-4 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-md font-semibold text-gray-900 uppercase">
              Quick Links
            </h2>
            <ul className="text-gray-600 dark:text-gray-500 font-medium space-y-3">
              <li>
                <Link href='/about' className="hover:underline hover:text-[#df0059ff]"> About </Link>
              </li>
              <li>
                <Link href='/programs' className="hover:underline hover:text-[#df0059ff]"> Programs </Link>
              </li>
              <li>
                <Link href='/contact' className="hover:underline hover:text-[#df0059ff]"> Contact </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-md font-semibold text-gray-900 uppercase">
              Contact us
            </h2>
            <ul className="text-gray-600 dark:text-gray-500 font-medium space-y-3">
              {contactMethods.map((method, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {method.icon}
                  <a href={method.link} className="hover:underline hover:text-[#df0059ff]">
                    {method.contact}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-md font-semibold text-gray-900 uppercase">
              Hours of operation
            </h2>
            <ul className="text-gray-600 dark:text-gray-500 font-medium space-y-3">
              
              <li>Monday - Friday: 7:00 AM - 6:00 PM</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-md font-semibold text-gray-900 uppercase">
              Parental info
            </h2>
            <ul className="text-gray-600 dark:text-gray-500 font-medium space-y-3">
              <li>
                <a href="/application.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#df0059ff]">
                  Enrollment Application
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[#df0059ff]">
                  Parent Handbook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-gray-600 text-md pt-10 py-4">
          &copy;{new Date().getFullYear()} TigerTastic Family Daycare | All
          rights reserved
        </p>
        <p className="text-center text-gray-600 text-sm">
          Made by{" "}
          <a href="https://qualitydesigns.site" target="_blank" className="hover:underline text-[#df0059ff]">
            Quality Designs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
