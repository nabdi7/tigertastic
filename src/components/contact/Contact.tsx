"use client";
import emailjs from '@emailjs/browser';
import React, { useState, useRef, FormEvent } from 'react';
import FAQ from "./Faq";

interface ContactFormState {
  formSubmitted: boolean;
  contactMessage: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}

const Contact = () => {
  const [{ formSubmitted, contactMessage, user_name, user_email, user_phone, message }, setState] = useState<ContactFormState>({
    formSubmitted: false,
    contactMessage: "",
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  console.log("Service ID:", process.env.NEXT_PUBLIC_APP_SERVICE_ID);
  console.log("Template ID:", process.env.NEXT_PUBLIC_APP_TEMPLATE_ID);
  console.log("User ID:", process.env.NEXT_PUBLIC_APP_USER_ID);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_APP_SERVICE_ID ?? "", process.env.NEXT_PUBLIC_APP_TEMPLATE_ID?? "", formRef.current!, process.env.NEXT_PUBLIC_APP_USER_ID ?? "")
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setState((prevState) => ({
            ...prevState,
            formSubmitted: true,
            contactMessage: "We got your message. Thanks!",
          }));
          setTimeout(() => {
            setState((prevState) => ({
              ...prevState,
              contactMessage: "",
              user_name: "",
              user_phone: "",
              user_email: "",
              message: "",
              formSubmitted: false,
            }));
          }, 2000);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

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
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "Tigertastic.daycare@gmail.com",
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
      link: "https://www.google.com/maps/place/7169+38th+Ave.+S,+Seattle,+WA+98118/@47.5379308,-122.2856498,17z/data=!3m1!4b1!4m6!3m5!1s0x54904203b22c251f:0xec165009827df152!8m2!3d47.5379308!4d-122.2856498!16s%2Fg%2F11csm0ttb2?entry=ttu",
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
            d="M12 6v6h4.5M12 3.75a8.25 8.25 0 100 16.5 8.25 8.25 0 000-16.5z"
          />
        </svg>
      ),
      contact: "Hours: Mon - Fri: 7:00 am - 6:00 pm",
    },
  ];
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
          Contact Us
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-5 mt-2"></div>
        </h2>
      </div>
      <section className="pt-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <h3 className="text-indigo-600 font-semibold">Contact</h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Let us know how we can help
              </p>
              <p>
                We’re here to help and answer any question you might have, We
                look forward to hearing from you! Please fill out the form, or
                use the contact information bellow .
              </p>
              <div>
                <ul className="mt-6 flex flex-wrap gap-x-20 gap-y-6 items-center">
                  {contactMethods.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-x-3">
                      <div className="flex-none text-gray-400">{item.icon}</div>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="hover:underline hover:text-[#df0059ff]"
                        >
                          {item.contact}
                        </a>
                      ) : (
                        <span>{item.contact}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden lg:block space-y-3">
                <p className="pt-5 text-gray-800 text-xl font-semibold sm:text-xl">
                  Frequently asked questions
                </p>
                <div className="">
                  <FAQ />
                </div>
              </div>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md ">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-5 p-6 bg-white border border-gray-200 shadow-sm rounded-lg"
              >
                <div>
                  <label className="font-medium">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    value={user_name}
                    onChange={(e) => setState((prevState) => ({ ...prevState, user_name: e.target.value }))}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    value={user_email}
                    onChange={(e) => setState((prevState) => ({ ...prevState, user_email: e.target.value }))}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Phone</label>
                  <input
                    type="text"
                    name="user_phone"
                    value={user_phone}
                    onChange={(e) => setState((prevState) => ({ ...prevState, user_phone: e.target.value }))}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Message</label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setState((prevState) => ({ ...prevState, message: e.target.value }))}
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Submit
                </button>
                {formSubmitted && <p className="text-indigo-500">Successfull!! We&apos;ll get back to you shortly.</p>}
              </form>
            </div>
            <div className="lg:hidden pt-8 space-y-3">
              <p className="pt-5 text-gray-800 text-xl font-semibold sm:text-xl">
                Frequently asked questions
              </p>
              <div className="">
                <FAQ />
              </div>
            </div>
          </div>

          {/* google maps */}
          <div className="mt-20 mb-20">
            <iframe
              title="map"
              className="w-full h-96 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.5342048924504!2d-122.28564979999999!3d47.53793079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54904203b22c251f%3A0xec165009827df152!2s7169%2038th%20Ave.%20S%2C%20Seattle%2C%20WA%2098118!5e0!3m2!1sen!2sus!4v1718765376967!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
