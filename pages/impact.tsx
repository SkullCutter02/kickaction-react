import React from "react";

import Hero from "../components/ui/shared/Hero";
import Impact from "../components/ui/impact/Impact";
import heroes from "../data/heroes";

const ImpactPage: React.FC = () => {
  return (
    <>
      <Hero heroContent={heroes.impact} heroFileName={"impact-hero.mp4"} isHeroVideo={true} />
      <Impact />
    </>
  );
};

export default ImpactPage;
