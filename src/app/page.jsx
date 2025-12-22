import AboutSection from "@/components/AboutSection/AboutSection";
import Banner from "@/components/Banner/Banner";
import Service from "@/components/Service/Service";
import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <Banner />
      <AboutSection />
      <Service />
    </div>
  );
};

export default page;
