import React from 'react'
import About from '@/components/aboutPage/About'
import Cta from "@/components/cta/Cta";

export const metadata = {
  title: "About Us | TigerTastic Family Daycare",
  description: "Learn more about TigerTastic Family Daycare, a family daycare that provides a safe, nurturing, and educational environment for children",
};

const page = () => {
  return (
    <div>
      <About />
      <Cta />
    </div>
  )
}

export default page