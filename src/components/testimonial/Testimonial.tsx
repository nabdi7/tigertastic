"use client";
import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW_wZ3rfU8Oa4C8rpYkIgWZ6wgIi0oFzrFJeX8BTXHg6im9eCs=w120-h120-p-rp-mo-br100",
      name: "Ana radzi",
      title: "Parent",
      quote:
        "My kids have been at TigerTastic for over 3 years and love being there. They treat my kids as their own. They are trustworthy and communicative.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Honey Lala",
      title: "Parent",
      quote:
        "I have been coming here for over 5 years. It has been the best decision and wonderful experience. Great care and understanding people. Love it here.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Bright Smiles",
      title: "Owner",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain. There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    },
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            See what others saying about us
          </h3>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est
            hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna
            lorem, euismod volutpat arcu volutpat et.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    {/* <img src={item.avatar} className="w-16 h-16 rounded-full" /> */}
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
