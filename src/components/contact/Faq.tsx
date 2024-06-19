"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "Can we schedule a tour of the facility before enrolling?",
    answer:
      "Yes, we would be delighted to give you a tour of our facility. Please feel free to contact us at (206) 446-7203 to schedule a convenient time for your visit.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept both private pay and payments through DCYF (Department of Children, Youth & Families). Our aim is to provide flexible payment options that suit the needs of our families.",
  },
  {
    question: "Do you provide meals and snacks?",
    answer:
      "Yes. We take pride in offering free healthy breakfast, lunch and snacks to fuel your child's day. Our menus are carefully curated to meet dietary needs and promote healthy eating habits.",
  },
  {
    question: "Do you offer part-time or full-time enrollment options?",
    answer:
      "Yes, we offer both part-time and full-time enrollment options. Please reach out to us to discuss which option works best for you.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b pb-4">
          <button
            className="w-full text-left text-lg  text-gray-700"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-gray-500">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
