import AboutSection from "@/components/AboutSection/AboutSection";
import Banner from "@/components/Banner/Banner";
import Service from "@/components/Service/Service";
import Stats from "@/components/LandingSections/Stats";
import Features from "@/components/LandingSections/Features";
import WhyChooseUs from "@/components/LandingSections/WhyChooseUs";
import HowItWorks from "@/components/LandingSections/HowItWorks";
import FAQ from "@/components/LandingSections/FAQ";
import Newsletter from "@/components/LandingSections/Newsletter";
import CTA from "@/components/LandingSections/CTA";
import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <Banner />
      <Stats />
      <AboutSection />
      <Features />
      <WhyChooseUs />
      <HowItWorks />
      <Service />
      <FAQ />
      <Newsletter />
      <CTA />
    </div>
  );
};

export default page;
