import React from "react";

import Hero from "../components/ui/shared/Hero";
import heroes from "../data/hero";

const OurPartnersPage: React.FC = () => {
  return (
    <>
      <Hero heroFileName={"our-partners-hero.jpg"} heroContent={heroes.ourPartners} />
    </>
  );
};

export default OurPartnersPage;
