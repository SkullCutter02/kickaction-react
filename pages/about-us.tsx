import React from "react";

import Hero from "../components/ui/shared/Hero";
import heroes from "../data/heroes";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Hero heroContent={heroes.aboutUs} heroFileName={"about-us-hero.jpg"} />
    </>
  );
};

export default AboutUsPage;
