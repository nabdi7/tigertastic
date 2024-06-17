import React from "react";
import Link from "next/link";

const Footer = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+1 (206) 446-7203",
      link: "tel:+12064467203",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "tigertastic.daycare@gmail.com",
      link: "mailto:tigertastic.daycare@gmail.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "7169 38th Ave S, Seattle, WA",
      link: "mailto:tigertastic.daycare@gmail.com",
    },
  ];

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
              <li>Mon - Fri: 6:00 AM - 12:00 AM</li>
              <li>Sat - Sun: 6:00 AM - 6:00 PM</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-md font-semibold text-gray-900 uppercase">
              Parental info
            </h2>
            <ul className="text-gray-600 dark:text-gray-500 font-medium space-y-3">
              <li>
                <a href="/application.pdf" target="_blank" className="hover:underline hover:text-[#df0059ff]">
                  Enrollment Application
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-[#df0059ff]">
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
