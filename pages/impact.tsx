import React from "react";

import Hero from "../components/ui/shared/Hero";
import heroes from "../data/heroes";

const ImpactPage: React.FC = () => {
  return (
    <>
      <Hero heroContent={heroes.impact} heroFileName={"impact-hero.mp4"} isHeroVideo={true} />
    </>
  );
};

export default ImpactPage;
