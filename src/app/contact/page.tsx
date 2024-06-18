import React from "react";
import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Contact Us | TigerTastic Family Daycare",
  description: "Contact TigerTastic Family Daycare for more information about our programs, hours, and location.",
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
