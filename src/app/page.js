import Image from "next/image";
import { Hero } from "./components/Hero";
import { CTA } from "./components/CTA";
import { BlogLanding } from "./components/BlogLanding";
import { Stats } from "./components/Stats";
import { Testimonial } from "./components/Testimonial";
import { FeatureLanding } from "./components/FeatureLanding";
import { LogoCloud } from "./components/LogoCloud";
import { Contact } from "./components/Contact";
import { PracticeAreasComponent } from "./components/PracticeAreasComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <CTA />
      <BlogLanding />
      <Testimonial />
      <PracticeAreasComponent />
      <Stats />
      <Contact />
    </>
  );
}
