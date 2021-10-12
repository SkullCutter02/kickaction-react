import React from "react";

import Hero from "../components/ui/shared/Hero";
import Partners from "../components/ui/ourPartners/Partners";
import heroes from "../data/heroes";

const OurPartnersPage: React.FC = () => {
  return (
    <>
      <Hero heroFileName={"our-partners-hero.jpg"} heroContent={heroes.ourPartners} />
      <Partners />
    </>
  );
};

export default OurPartnersPage;
