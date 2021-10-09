import React from "react";

import Hero from "../components/ui/shared/Hero";
import Members from "../components/ui/aboutUs/Members";
import heroes from "../data/heroes";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Hero heroContent={heroes.aboutUs} heroFileName={"about-us-hero.jpg"} />
      <Members />
    </>
  );
};

export default AboutUsPage;
