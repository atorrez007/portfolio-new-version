import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroImg2 from "../components/HeroImg2";
import Work from "../components/Work";
// import PricingCard from "../components/PricingCard";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Projects" text="Some of my recent work" />
      <Work />
      {/* <PricingCard /> */}
      <Footer />
    </div>
  );
};

export default Projects;
