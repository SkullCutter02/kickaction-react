import React from "react";

import Hero from "../components/ui/shared/Hero";
import heroes from "../data/hero";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero isHeroVideo={true} heroFileName={"index-hero.mp4"} isHomePage={true} heroContent={heroes.home} />
    </>
  );
};

export default HomePage;
