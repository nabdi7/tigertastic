import Image from "next/image";
import Hero from "@/components/hero/Hero"
import Feature from "@/components/features/feature";
import About from "@/components/about/About";
import Features from "@/components/features/Features";
import Stats from "@/components/stats/Stats";
import Gallery from "@/components/gallery/Gallery";
import Testimonials from "@/components/testimonial/Testimonial";
import Cta from "@/components/cta/Cta";


export default function Home() {
  return (
    <main className="">
      <Hero />
      <Feature />
      <About />
      <Features />
      <Stats />
      <Gallery />
      <Testimonials />
      <Cta />
    </main>
  );
}
