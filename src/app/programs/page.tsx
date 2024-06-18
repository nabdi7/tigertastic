import React from 'react'
import Programs from "@/components/programs/Programs";
import Cta from "@/components/cta/Cta";

export const metadata = {
  title: "Our Programs | TigerTastic Family Daycare",
  description: "Learn more about the programs offered at TigerTastic Family Daycare, a family daycare that provides a safe, nurturing, and educational environment for children.",
};

const page = () => {
  return (
    <div>
      <Programs />
      <Cta />
    </div>
  )
}

export default page