import React from "react";

import CirriculumTable from "../components/ui/cirriculum/CirriculumTable";
import Hero from "../components/ui/shared/Hero";
import heroes from "../data/heroes";

const CirriculumPage: React.FC = () => {
  return (
    <>
      <Hero heroFileName={"about-us-hero.jpg"} heroContent={heroes.cirriculum} />
      <CirriculumTable />
    </>
  );
};

export default CirriculumPage;
