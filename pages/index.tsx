import React from "react";

import Hero from "../components/ui/shared/Hero";
import OurMission from "../components/ui/home/OurMission";
import Sdgs from "../components/ui/home/Sdgs";
import heroes from "../data/heroes";
import Impact from "../components/ui/home/Impact";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero isHeroVideo={true} heroFileName={"index-hero.mp4"} isHomePage={true} heroContent={heroes.home} />
      <OurMission />
      <Sdgs />
      <Impact />
    </>
  );
};

export default HomePage;
