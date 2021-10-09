import React from "react";

import Hero from "../components/ui/shared/Hero";
import OurMission from "../components/ui/home/OurMission";
import heroes from "../data/hero";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero isHeroVideo={true} heroFileName={"index-hero.mp4"} isHomePage={true} heroContent={heroes.home} />
      <OurMission />
    </>
  );
};

export default HomePage;
